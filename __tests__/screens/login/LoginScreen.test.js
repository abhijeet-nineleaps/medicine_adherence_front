import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import Loginscreen from '../../../src/screens/login/LoginScreen';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(),
  setItem: jest.fn(),
}));
jest.mock('@react-native-google-signin/google-signin', () => ({
  default: jest.fn(),
}));
jest.mock('@react-native-firebase/messaging', () => ({
  default: jest.fn(),
}));
jest.mock('react-native-svg', () => ({
  default: jest.fn(),
}));
jest.mock('react-native-progress', () => ({
  default: jest.fn(),
}));
jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn()
}));
jest.mock('@react-native-community/netinfo', () => ({
  default: jest.fn(),
}));
jest.mock('@react-native-google-signin/google-signin', () => ({
  default: jest.fn(),
  GoogleSigninButton: {
    Size: {
      Wide: () => ({}),
    },
    Color: {
      Dark: () => ({}),
    },
  },
}));
jest.useFakeTimers();
describe('Click send image', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Loginscreen />)
      .childAt(1)
      .dive();
    jest.runAllTimers();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Loginscreen loginuser={mockFn} />);
    wrapper.find('#signin').simulate('press');
  });
});
