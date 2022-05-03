/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Alert, View} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import {API_URL} from '@env';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';
import Checkconnectivity from '../connectivity/Checkconnectivity';
import LottieView from 'lottie-react-native';
import {Text} from 'react-native-elements';

interface Props {
  navigation: any;
}

const Login: React.FC<{navigation}> = Props => {
  const {navigation} = Props;
  const [loading, loadingstate] = React.useState(false);
  const [connected, connectedstate] = React.useState(false);

  async function checkconnection() {
    let conn: any = await Checkconnectivity();
    connectedstate(conn);
  }
  React.useEffect(() => {
    checkconnection();
    GoogleSignin.configure({
      webClientId:
        '526586885579-90t54t6rmkquqjct1819getnkstse41j.apps.googleusercontent.com',
    });
  });
  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      const token = await messaging().getToken();
      loadingstate(true);
      let url: any = new URL(`${API_URL}/api/v1/user`);
      url.searchParams.append('fcmToken', token);
      url.searchParams.append('picPath', userinfo.user.photo);

      await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          userName: userinfo.user.givenName,
          email: userinfo.user.email,
        }),
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then(resp => resp.json())
        .then(async res => {
          if (res.status === 'Success') {
            await AsyncStorage.setItem('user_id', res.userentity[0].userId);
            await AsyncStorage.setItem('user_name', res.userentity[0].userName);
            await AsyncStorage.setItem('jwt', res.jwt);
            Toast.show({
              type: 'success',
              text1: 'Account created successfully',
            });
            loadingstate(false);

            setTimeout(() => {
              navigation.pop(1);
            }, 3000);
          } else {
            await GoogleSignin.signOut();
            loadingstate(false);
            Toast.show({
              type: 'info',
              text1: 'User with this email already present',
            });
          }
        })
        .catch(async () => {
          Toast.show({
            type: 'info',
            text1: 'Failed',
          });
          if (await GoogleSignin.isSignedIn()) {
            await GoogleSignin.signOut();
          }
        });
    } catch (err: any) {
      if (await GoogleSignin.isSignedIn()) {
        await GoogleSignin.signOut();
      }
      Toast.show({
        type: 'info',
        text1: 'Failed',
      });
    }
  }

  return (
    <View
      style={{
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
      }}>
      <Toast visibilityTime={3000}></Toast>
      <Text style={{fontSize: 25, fontWeight: '500'}}>Create an account</Text>
      <LottieView
        style={{width: 130, height: 130}}
        source={require('../../assests/animate/google.json')}
        autoPlay
        loop
      />

      <GoogleSigninButton
        style={{width: 292, height: 58, margin: 20, borderRadius: 40}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() =>
          onGoogleButtonPress()
            .then(() => console.log('Google'))
            .catch(err => console.log(err))
        }
      />

      {loading && (
        <Progress.CircleSnail
          spinDuration={1500}
          size={80}
          color={['red', 'green', 'yellow']}
        />
      )}
    </View>
  );
};

export default Login;
