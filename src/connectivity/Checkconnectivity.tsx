/* eslint-disable no-new */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NetInfo from '@react-native-community/netinfo';

const Checkconnectivity = async () => {
  let state_type: Boolean | null = null;
  async function checkstatus() {
    new Promise((res, rej) => {
      const unsubscribe = NetInfo.addEventListener(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        state_type = state.isConnected;
        res(state_type);
      });

      unsubscribe();
    });
  }

  await checkstatus().then(val => console.log(val));
  return state_type;
};

export default Checkconnectivity;
