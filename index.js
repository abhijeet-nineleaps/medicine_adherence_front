/**
 * @format
 */

import {Alert, AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import PushNotification from "react-native-push-notification";
import SQLite from 'react-native-sqlite-storage';

var Sound = require('react-native-sound');

import {name as appName} from './app.json';


PushNotification.configure({
  
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);
  
    if(notification.action === 'Taken'){
      const db = SQLite.openDatabase({
        name:'MedRemdb',
        location:'default'
    },()=>{
        console.log('opened')
    },error=>{
        console.log(error)
    })
   
      console.log('Taken')
  }else if(notification.action === 'Skip'){
console.log('Not taken')
  }
     },

  onAction: function (notification) {
    const {action} = notification.action;
    console.log(action);
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification.action);
   

  },

  onRegistrationError: function(err) {
    console.error(err.message, err);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
    
  },

 
  popInitialNotification: true,


  requestPermissions: true,
});
messaging().onMessage(async mssg => {

  Alert.alert(
    mssg.notification.title,
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  console.log("rece in fore", mssg)
})
messaging().setBackgroundMessageHandler(async remoteMessage => {
  Sound.setCategory('Alarm')
    var whoosh = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        whoosh.setNumberOfLoops(0);

        // Play the sound with an onEnd callback
        whoosh.play((success) => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
        messaging().onNotificationOpenedApp(mssg=>{

whoosh.stop(()=>{
  whoosh.reset()
})

        })
      });
});




AppRegistry.registerComponent(appName, () => App);
