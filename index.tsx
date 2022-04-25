import {AppRegistry} from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import SQLite from 'react-native-sqlite-storage';

import {name as appName} from './app.json';
import {
  PlaySound,
  Pushnotificationforeground,
} from './src/alarm/Pushnotificationconfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

PushNotification.configure({
  onNotification: function (notification: any) {
    console.log('NOTIFICATION:', notification);

    if (notification.action === 'Open app to mark') {
    } else if (notification.action === 'Skip') {
    } else if (notification.action === 'Notifie Caretaker') {
    }
  },

  onAction: function (notification: any) {
    const {action} = notification.action;
    console.log(action);

    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification.action);
    if (notification.action === 'Open app to mark') {
      PushNotification.invokeApp(notification);
    }
  },

  onRegistrationError: function (err: any) {
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

async function checkfordb() {
  
}
messaging().onMessage(async mssg => {
  Pushnotificationforeground(mssg);

  // if patient send notification
});

messaging().onNotificationOpenedApp((mss: any) => {
  if (mss.notification.title === 'caretaker') {
    Pushnotificationforeground(mss);
  } else if (mss.notification.title === 'request') {
    Pushnotificationforeground(mss);
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
    Pushnotificationforeground(remoteMessage);
    // if patient send noification
  } else if (remoteMessage.notification.title === 'request') {
    Pushnotificationforeground(remoteMessage);
  } else {
    PlaySound();
    Pushnotificationforeground(remoteMessage);
  }
});

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask(
  'com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService',
  () => {},
);
