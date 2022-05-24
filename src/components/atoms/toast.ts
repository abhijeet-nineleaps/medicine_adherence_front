import {ToastAndroid} from 'react-native';

export const showToast = (mssg: string) => {
  ToastAndroid.show(mssg, ToastAndroid.LONG);
};
