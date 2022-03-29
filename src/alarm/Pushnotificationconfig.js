import messaging, { firebase } from '@react-native-firebase/messaging';

import { Alert, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import React from 'react';
import Checkconnectivity from '../connectivity/Checkconnectivity';
var Sound = require('react-native-sound');

let token1 = '';
const Pushnotification = () => {
React.useEffect(()=>{
     async function check(){
        console.log(await Checkconnectivity(),'info');

     }
check()
},[])

    const Remin = () => {
        async function requestUserPermission() {
            const authStatus = await messaging().requestPermission();
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;

            if (enabled) {
                console.log('Authorization status:', authStatus);
                const token = await messaging().getToken();
                token1 = token;
                console.log(token);
            }
        }
        requestUserPermission()
    }

    const listener = async () => {
     
        // const head = await messaging().getIsHeadless();
        // console.log(head)
        messaging().onNotificationOpenedApp(mss => {
            var whoosh = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                // loaded successfully
                console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
                whoosh.setVolume(9.5);
                // Play the sound with an onEnd callback
                whoosh.play((success) => {
                    if (success) {
                        console.log('successfully finished playing');
                    } else {
                        console.log('playback failed due to audio decoding errors');
                    }
                });
            });
            console.log("Back state", mss.notification)
        })

        messaging().onMessage(async mssg => {
            Alert.alert(mssg.notification)
            console.log("rece in fore", mssg.body)
        })


        messaging().getInitialNotification().then(mssg => {
            if (mssg) {

                console.log('Rece from quit', mssg.notification)
            }
        })
    }


    return (
        <View style={{ marginBottom: 15 }}>
            <Button onPress={() => Remin()} title="Reminder"></Button>
            <Button onPress={() => listener()} title="Listener"></Button>

        </View>
    )


}

export default Pushnotification;