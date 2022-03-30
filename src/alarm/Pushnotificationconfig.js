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
        
    }


    return (
        <View style={{ marginBottom: 15 }}>
            <Button onPress={() => Remin()} title="Reminder"></Button>
            <Button onPress={() => listener()} title="Listener"></Button>

        </View>
    )


}

export default Pushnotification;