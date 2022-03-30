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
  var num = Math.floor(Math.random() * 90000) + 10000;
console.log(num)
  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    title: mssg.notification.title,
    message: 'Time to eat your medicine',
    subText: 'Mark as read if you have taken', // (required)
    id: num.toString(),
    color: '#3743ab',
    showWhen:true,
    visibility: 'public',
    usesChronometer: true,
    date: new Date(Date.now() + 500), // in 60 secs
    allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
    vibrate: true,
    playSound: true,
    
    soundName: 'android.resource://com.project/raw/my_sound.mp3',

    smallIcon: 'android.resource://com.project/raw/icon.png',
    vibrate: true,

    actions: ['Taken', 'Skip', 'Send ']
    // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
  });
  // Alert.alert(
  //   JSON.stringify(mssg.notification.title),
  //   "My Alert Msg",
  //   [
  //     {
  //       text: "Ask me later",
  //       onPress: () => console.log("Ask me later pressed")
  //     },
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel"
  //     },
  //     { text: "OK", onPress: () => console.log("OK Pressed") }
  //   ]
  // );

  //console.log("rece in fore", mssg)
})

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



messaging().getInitialNotification().then(mssg => {
  if (mssg) {

      console.log('Rece from quit', mssg.notification)
  }
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
