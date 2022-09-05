import {render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import SavedDetails from '../../../src/screens/profile/SavedDetails';
jest.mock('@react-native-async-storage/async-storage', () => ({
default: jest.fn(),
AsyncStorage : {
  setItem : () => ({}),
  clear : () => ({}),
}
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}));
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = render(<SavedDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
// beforeEach(() => {
//   AsyncStorage.clear();
//   // console.log(`After the data is being reset :`)
//   // console.log(AsyncStorage)
// });

// it.only('can read asyncstorage', async () => {
//   await AsyncStorage.setItem('bio', 'testUser');
//   let sbio = await AsyncStorage.getItem('bio');
//   let scontact = await AsyncStorage.getItem('contact');
//   let sage = await AsyncStorage.getItem('age');
//   let sweight = await AsyncStorage.getItem('weight');
//   let sgender = await AsyncStorage.getItem('gender');
//   let maritalstatus = await AsyncStorage.getItem('maritalstatus');
//   let sblood = await AsyncStorage.getItem('bloodgroup');
//   // console.log(`After the data is being set :`)
//   // console.log(AsyncStorage)
//   expect(username).toBe('testUser');
// });

// async function getuserdetail() {
//   let sbio = await AsyncStorage.getItem('bio');
// let scontact = await AsyncStorage.getItem('contact');
// let sage = await AsyncStorage.getItem('age');
// let sweight = await AsyncStorage.getItem('weight');
// let sgender = await AsyncStorage.getItem('gender');
// let maritalstatus = await AsyncStorage.getItem('maritalstatus');
// let sblood = await AsyncStorage.getItem('bloodgroup');
//   biostate(sbio);
//   contactstate(scontact);
//   agestate(sage);
//   weightstate(sweight);
//   genderstate(sgender);
//   msstate(maritalstatus);
//   bloodstate(sblood);
// }
// getuserdetail();
// });
