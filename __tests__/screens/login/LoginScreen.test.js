import React from 'react';
import renderer from 'react-test-renderer';
import Loginscreen from '../../../src/screens/login/LoginScreen';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-native-firebase/messaging", () => ({
  default: jest.fn(),
}));
// jest.mock("@react-native-google-signin/google-signin", () => ({
 // default: jest.fn(),
//   GoogleSigninButton: {
//     size : () => ({}),
//   }
  
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
  GoogleSigninButton: {
    Size : {
      Wide : () => ({}),
    },
    Color : {
      Dark : () => ({}),
    }
  }
}));
jest.mock("react-native", () => ({
  default: jest.fn(),
  StyleSheet: {
    create: () => ({}),
  }
}));
jest.mock("react-native-svg", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-progress", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-toast-message", () => ({
  default: jest.fn(),
}));


describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Loginscreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Loginscreen loginuser={mockFn} />);
    wrapper.find('#signin').simulate('press');
  });
});
