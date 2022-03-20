import { Alert, View } from "react-native";
import React from "react";
import { GoogleSignin, GoogleSigninButton ,statusCodes} from "@react-native-google-signin/google-signin";
import { Button } from "react-native-elements";
import auth from '@react-native-firebase/auth';
import TypeWriter from 'react-native-typewriter'
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Progress from 'react-native-progress';
import { API_URL } from '@env'
import Toast from 'react-native-toast-message';


const Login = ({ navigation }) => {

    const [loading, loadingstate] = React.useState(false);

    React.useEffect(() => {
        GoogleSignin.configure({
            webClientId: '526586885579-90t54t6rmkquqjct1819getnkstse41j.apps.googleusercontent.com'
        })
    })
    async function onGoogleButtonPress() {
        try {
            await GoogleSignin.hasPlayServices();
            const userinfo = await GoogleSignin.signIn();
            console.log(userinfo);

            loadingstate(true)
            await fetch(`${API_URL}/api/user/saveuser`, {
                method: 'POST',
                body: JSON.stringify({
                    user_name: userinfo.user.givenName,
                    email: userinfo.user.email
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(resp => resp.json())
                .then(async res => {
                    console.log(res)
                    if (res.status === 'success') {

                        console.info(res.userentity[0].user_id)
                        await AsyncStorage.setItem('user_id', res.userentity[0].user_id)
                        await AsyncStorage.setItem('user_name', res.userentity[0].user_name)

                        console.info(await AsyncStorage.getItem('user_id')
                            , await AsyncStorage.getItem('user_name'))
                        Toast.show({
                            type: 'success',
                            text1: 'Account created successfully'
                        })
                        loadingstate(false);

                        setTimeout(() => {
                            navigation.pop(1)

                        }, 3000)
                    } else if (res.status === 'Already present') {
                        await GoogleSignin.signOut();
                        loadingstate(false);
                        Toast.show({
                            type: 'info',
                            text1: 'User with this email already present'
                        })
                    }
                }).catch(err => {
                    console.log(err);
                    Toast.show({
                        type: 'info',
                        text1: 'Failed',
                        s
                    })
                })

        } catch (err) {
            if(err.code === statusCodes.IN_PROGRESS){
                 if(await GoogleSignin.isSignedIn()){
                      await GoogleSignin.signOut();
                 }
            }
            console.log(err);
            Toast.show({
                type: 'info',
                text1: 'Failed',
                s
            })
        }

    }

    async function onGooglelogout() {
        try {
            const logout = await GoogleSignin.signOut();
            console.log(logout);

            navigation.navigate('Drawer')
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <View style={{ alignItems: 'center', height: '100%', justifyContent: 'center', width: '100%', backgroundColor: 'white' }}>

            <Toast visibilityTime={3000}></Toast>

            <TypeWriter typing={1} style={{ fontSize: 30, margin: 35 }} maxDelay={500}>Login with google</TypeWriter>

            <GoogleSigninButton
                style={{ width: 292, height: 58, margin: 20 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={() => onGoogleButtonPress().
                    then(() => console.log("Google"))
                    .catch(err => console.log('error'))
                } ></GoogleSigninButton>
            <Button style={{ width: 292, height: 58 }} title="Logout" onPress={() => onGooglelogout().then(() => console.log('logout'))}></Button>
            {
                loading &&
                <Progress.CircleSnail spinDuration={1500} size={80} color={['red', 'green', 'yellow']} />

            }
        </View>
    )

}

export default Login;