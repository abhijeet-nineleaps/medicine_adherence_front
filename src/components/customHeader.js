import ProfileHeader from './ProfileHeader';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React, {useEffect} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import {Alert, View} from 'react-native';
import {Signout} from './caretaker/allIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './componentStyles/styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const CustomHeader = props => {
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '526586885579-90t54t6rmkquqjct1819getnkstse41j.apps.googleusercontent.com',
    });
  });
  const [loggedin, loggedinstate] = React.useState(true);
  async function getuser() {
    try {
      const isllooged = await GoogleSignin.isSignedIn();
      const checkforlogin = await AsyncStorage.getItem('user_id');
      if (checkforlogin !== null) {
        loggedinstate(true);
        return;
      }
      loggedinstate(false);
    } catch (err) {}
  }
  useEffect(() => {
    return props.navigation.addListener('focus', () => {
      getuser();
    });
  }, [props.navigation]);
  useFocusEffect(() => {
    getuser();
  });
  const touchFnc = () => {
    props.navigation?.navigate('Profile');
  };
  function signupFnc() {
    props.navigation.navigate('Sign-up');
  }
  function loginFnc() {
    props.navigation.navigate('Login');
  }
  async function alertFnc() {
    {
      Alert.alert('Do you want to Logout?', '', [
        {
          text: 'Logout',
          onPress: async () => {
            await GoogleSignin.signOut();
            await AsyncStorage.setItem('bio', '-');
            await AsyncStorage.setItem('contact', '-');
            await AsyncStorage.setItem('age', '-');
            await AsyncStorage.setItem('weight', '-');
            await AsyncStorage.setItem('gender', '-');
            await AsyncStorage.setItem('maritalstatus', '-');
            await AsyncStorage.setItem('bloodgroup', '-');
            await AsyncStorage.setItem('user_id', '');
            await AsyncStorage.setItem('user_name', '');
            loggedinstate(false);
          },
        },
        {
          text: 'Cancel',
          onPress: () => undefined,
        },
      ]);
    }
  }
  return (
    <>
      <SafeAreaProvider>
        <DrawerContentScrollView style={styles.drawer}>
          <TouchableOpacity style={styles.touch} id="touch" onPress={touchFnc}>
            {<ProfileHeader></ProfileHeader>}
          </TouchableOpacity>
          <DrawerItemList {...props}></DrawerItemList>
          <View style={styles.top}>
            {!loggedin ? (
              <>
                <Button
                  id="signup"
                  iconPosition="right"
                  title="Sign up"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={styles.button}
                  titleStyle={styles.buttonTitle}
                  containerStyle={styles.buttonContainer}
                  onPress={signupFnc}
                />
                <Button
                  id="login"
                  iconPosition="right"
                  title="Login"
                  loading={false}
                  loadingProps={{size: 'small', color: 'white'}}
                  buttonStyle={styles.button}
                  titleStyle={styles.buttonTitle}
                  containerStyle={styles.buttonContainer}
                  onPress={loginFnc}
                />
              </>
            ) : (
              <Button
                id="alert"
                title="Logout"
                iconPosition="right"
                icon={Signout()}
                buttonStyle={styles.button}
                titleStyle={styles.buttonLogOutTitle}
                containerStyle={styles.buttonContainer}
                onPress={alertFnc}></Button>
            )}
          </View>
        </DrawerContentScrollView>
      </SafeAreaProvider>
    </>
  );
};
export default CustomHeader;
