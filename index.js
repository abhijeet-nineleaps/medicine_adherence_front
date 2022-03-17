/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
var Sound = require('react-native-sound');

import {name as appName} from './app.json';
messaging().setBackgroundMessageHandler(async remoteMessage => {
    var whoosh = new Sound('reminder.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully
        console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        whoosh.setNumberOfLoops(6);

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
  
})

        })
      });
});




AppRegistry.registerComponent(appName, () => App);
