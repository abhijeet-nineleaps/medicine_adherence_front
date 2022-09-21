import React from 'react';
import UserMed from '../../src/screens/UserMed';
import Enzyme, {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: jest.fn()}),
  useRoute: () => ({
    params: {
      Name: 'sample',
      Description: 'abc',
    },
  }),
}));
jest.mock('@react-native-async-storage/async-storage', () => ({
  default: jest.fn(),
}));
jest.mock('reanimated-bottom-sheet', () => ({
  default: jest.fn(),
}));
jest.mock('react-native-gesture-handler', () => ({
  default: jest.fn(),
}));
jest.mock('@react-native-async-storage/async-storage', () => ({
  default: jest.fn(),
}));
jest.useFakeTimers();
describe('user med', () => {
  it('test', () => {
    const wrapper = shallow(<UserMed />)
      .childAt(0)
      .dive();
    jest.runAllTimers();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
