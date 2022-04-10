import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
var Sound = require('react-native-sound');

function PlaySound() {
  Sound.setCategory('Alarm');
  var whoosh = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error: any) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log(
      'duration in seconds: ' +
        whoosh.getDuration() +
        'number of channels: ' +
        whoosh.getNumberOfChannels(),
    );
    whoosh.setNumberOfLoops(0);

    // Play the sound with an onEnd callback
    whoosh.play((success: any) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    messaging().onNotificationOpenedApp(mssg => {
      whoosh.pause();
    });
  });
}

function Pushnotificationforeground(mssg: any) {
  let body: String;
  let big_picure_url = '';
  // console.log(mssg , mssg.notification , mssg.notification.message)
  if (mssg.notification.title === 'caretaker') {
    big_picure_url = mssg.notification.android.imageUrl;
    body = mssg.notification.body;
    generatenotificationforcaretaker(mssg, body, big_picure_url);
    console.log(big_picure_url, ' Pi', mssg.notification);
  } else {
    body = mssg.notification.body;
    generatenotificationforpatient(mssg,body);
  }
}

function Pushnotification(mssg: any) {
  var num = Math.floor(Math.random() * 90000) + 10000;
  console.log(mssg);
  console.log(num);
  console.log(mssg, mssg.notification, mssg.notification.message);
}

const generatenotificationforpatient = (mssg: any, body: any) => {
  var num = Math.floor(Math.random() * 90000) + 10000;

  PushNotification.createChannel(
    {
      channelId: num.toString(), // (required)
      channelName: 'Med channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    title: mssg.notification.title,
    message: body,
    subText: '', // (required)
    id: num.toString(),
    color: '#3743ab',
    showWhen: true,
    visibility: 'public',
    usesChronometer: true,
    date: new Date(Date.now() + 500), // in 60 secs
    allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
    vibrate: true,
    playSound: true,

    soundName: 'android.resource://com.project/raw/my_sound.mp3',

    smallIcon: 'android.resource://com.project/raw/icon.png',

    actions: ['Notify Caretaker'],
    // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
  });
};

const generatenotificationforcaretaker = (
  mssg: any,
  body: any,
  big_picure_url: String,
) => {
  var num = Math.floor(Math.random() * 90000) + 10000;

  PushNotification.createChannel(
    {
      channelId: num.toString(), // (required)
      channelName: 'Med channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: false, // (optional) default: true
      soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
  PushNotification.localNotificationSchedule({
    //... You can use all the options from localNotifications
    title: mssg.notification.title,
    message: body,
    subText: '', // (required)
    id: num.toString(),
    color: '#3743ab',
    showWhen: true,
    visibility: 'public',
    usesChronometer: true,
    date: new Date(Date.now() + 500), // in 60 secs
    allowWhileIdle: true, // (optional) set notification to work while on doze, default: false
    vibrate: true,
    playSound: true,
    bigPictureUrl: big_picure_url,
    bigLargeIcon: big_picure_url, // (optional) default: undefined
    bigLargeIconUrl: big_picure_url,
    soundName: 'android.resource://com.project/raw/my_sound.mp3',

    smallIcon: 'ic_launcher',
    // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
  });
};

// const Remin = () => {
//   async function requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log('Authorization status:', authStatus);
//       const token = await messaging().getToken();
//       //   token1 = token;
//       console.log(token);
//     }
//   }
//   requestUserPermission();
// };

export {Pushnotification, PlaySound, Pushnotificationforeground};
