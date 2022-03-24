import messaging from '@react-native-firebase/messaging';

import { Alert, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import React from 'react';
var Sound = require('react-native-sound');

const Pushnotification = () => {

React.useEffect(()=>{

    var startdate = new Date();

    var startday = new Date(Date.now()).getDay();
    
    var end_date = new Date();
    console.log(startdate,startday)
    end_date.setDate(end_date.getDate()+10)
console.log(end_date)
console.log(startdate < end_date)

    var dub = new Date(end_date);
    let i =0 ;
    var weeks = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    while(startdate < end_date){
        dub.setDate(dub.getDate()+1)
        if(weeks[dub.getDay()] === 'Tuesday'){
            
        console.log(dub,dub.getDate() , weeks[dub.getDay()] , dub.getMonth());
        console.log(startdate)
        console.log(end_date)

        }
        startdate.setDate(startdate.getDate()+1)

    }
   

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
                console.log(token);
            }
        }
        requestUserPermission()
    }

    const listener = () => {

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