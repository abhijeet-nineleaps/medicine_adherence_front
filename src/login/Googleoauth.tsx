import {Alert, View} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {Button} from 'react-native-elements';
import TypeWriter from 'react-native-typewriter';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import {API_URL} from '@env';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';
import Checkconnectivity from '../connectivity/Checkconnectivity';

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({navigation}: Props) => {
  const [loading, loadingstate] = React.useState(false);
  const [connected , connectedstate] = React.useState(false);

  async function checkconnection() {
    let conn : any =  await Checkconnectivity();
connectedstate(conn);
  }
  React.useEffect(() => {
     checkconnection()
    GoogleSignin.configure({
      webClientId:
        '526586885579-90t54t6rmkquqjct1819getnkstse41j.apps.googleusercontent.com',
    });
  });
  async function onGoogleButtonPress() {
    try {
      if(!connected){
 
        Alert.alert("Not connected To Internet");
        return;

      }
      await GoogleSignin.hasPlayServices();
      const userinfo = await GoogleSignin.signIn();
      const token = await messaging().getToken();

      loadingstate(true);
      let url :any = new URL(`${API_URL}/api/user/saveuser`);
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
          console.log(res);
          if (res.status === 'success') {
            console.info(res.userentity[0].userId);
            await AsyncStorage.setItem('user_id', res.userentity[0].userId);
            await AsyncStorage.setItem(
              'user_name',
              res.userentity[0].userName,
            );

            console.info(
              await AsyncStorage.getItem('user_id'),
              await AsyncStorage.getItem('user_name'),
            );
            Toast.show({
              type: 'success',
              text1: 'Account created successfully',
            });
            loadingstate(false);

            setTimeout(() => {
              navigation.pop(1);
            }, 3000);
          } else if (res.status === 'Already present') {
            await GoogleSignin.signOut();
            loadingstate(false);
            Toast.show({
              type: 'info',
              text1: 'User with this email already present',
            });
          }
        })
        .catch(err => {
          console.log(err);
          Toast.show({
            type: 'info',
            text1: 'Failed',
          });
        });
    } catch (err: any) {
      if (err.code === statusCodes.IN_PROGRESS) {
        if (await GoogleSignin.isSignedIn()) {
          await GoogleSignin.signOut();
        }
      }
      console.log(err);
      Toast.show({
        type: 'info',
        text1: 'Failed',
      });
    }
  }

  async function onGooglelogout() {
    try {
      const logout = await GoogleSignin.signOut();
      console.log(logout);

      navigation.navigate('Drawer');
    } catch (err) {
      console.log(err);
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

      <TypeWriter typing={1} style={{fontSize: 30, margin: 35}} maxDelay={500}>
        Login with google
      </TypeWriter>

      <GoogleSigninButton
        style={{width: 292, height: 58, margin: 20}}
        size={GoogleSigninButton.Size.Wide}
      
        color={GoogleSigninButton.Color.Dark}
        onPress={() =>
          onGoogleButtonPress()
            .then(() => console.log('Google'))
            .catch(err => console.log('error'))
        }></GoogleSigninButton>
      
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
