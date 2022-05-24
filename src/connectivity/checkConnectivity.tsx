/* eslint-disable no-new */
import NetInfo from '@react-native-community/netinfo';

const Checkconnectivity = async () => {
  let state_type: Boolean | null = null;
  return new Promise(res => {
    const unsubscribe = NetInfo.addEventListener(state => {
      state_type = state.isConnected;
      res(state_type);
    });

    unsubscribe();
  });
};

export default Checkconnectivity;
