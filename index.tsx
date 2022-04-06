import {Alert, AppRegistry} from 'react-native';
import App from './App';
import messaging, {firebase} from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import SQLite from 'react-native-sqlite-storage';

var Sound = require('react-native-sound');

import {name as appName} from './app.json';
import {PlaySound, Pushnotification, Pushnotificationforeground} from './src/alarm/Pushnotificationconfig';

PushNotification.configure({
  onNotification: function (notification: any) {
    console.log('NOTIFICATION:', notification);

    if (notification.action === 'Open app to mark') {
      const db = SQLite.openDatabase(
        {
          name: 'MedRemdb',
          location: 'default',
        },
        () => {
          console.log('opened');
        },
        (error:any) => {
          console.log(error);
        },
      );

      console.log('Taken');
    } else if (notification.action === 'Skip') {
      console.log('Not taken');
    } else if (notification.action === 'Notifie Caretaker') {
      console.log('Notified succ');
    }
  },

  onAction: function (notification : any) {
    const {action} = notification.action;
    console.log(action);

    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification.action);
    if(notification.action === 'Open app to mark'){
      PushNotification.invokeApp(notification);
    }
  
  },

  onRegistrationError: function (err : any) {
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

    Pushnotificationforeground(mssg);

    // if patient send notification
  });

messaging().onNotificationOpenedApp((mss: any) => {
  if (mss.notification.title === 'caretaker') {
    Pushnotificationforeground(mss)
  } else {
    PlaySound();
    Pushnotificationforeground(mss);
  }
});

messaging()
  .getInitialNotification()
  .then(mssg => {
    if (mssg) {
      console.log('Rece from quit', mssg.notification);
    }
  });

messaging().setBackgroundMessageHandler(async (remoteMessage: any) => {
  if (remoteMessage.notification.title === 'caretaker') {
    Pushnotificationforeground(remoteMessage)
    // if patient send noification
  } else {
    PlaySound();
    Pushnotificationforeground(remoteMessage);
  }
});

AppRegistry.registerComponent(appName, () => App);
