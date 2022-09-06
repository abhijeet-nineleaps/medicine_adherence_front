import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from 'jest-react-hooks-shallow';
import Enzyme, {shallow, render} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
import DrawerNavigator from '../../src/navigation/drawerNavigator';
import toJson from 'enzyme-to-json';
import {NavigationContainer} from '@react-navigation/native';
enableHooks(jest);

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  useEffect: jest.fn(),
}));
jest.mock('@react-native-google-signin/google-signin/lib/commonjs', () => ({
  default: jest.fn(),
}));
describe('drawer navigator', () => {
  it('test', () => {
    const wrapper = shallow(<DrawerNavigator />)
      .childAt(0)
      .dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
describe('<FirstComponent /> functions', () => {
  it('test the only function', () => {
    const wrapper = renderer.create(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>,
    );
    const inst = wrapper.getInstance();
    expect(
      inst?.homeIcon(<Icon name="home" size={22} color="white" />),
    ).toMatchSnapshot();
  });
  it('test the only function', () => {
    const wrapper = renderer.create(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>,
    );
    const inst = wrapper.getInstance();
    expect(
      inst?.medIcon(<Icon size={20} name="medkit" color="white"></Icon>),
    ).toMatchSnapshot();
  });
  it('test the only function', () => {
    const wrapper = renderer.create(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>,
    );
    const inst = wrapper.getInstance();
    expect(
      inst?.userIcon(<Icon name="user-md" size={22} color="white" />),
    ).toMatchSnapshot();
  });
  it('test the only function', () => {
    const wrapper = renderer.create(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>,
    );
    const inst = wrapper.getInstance();
    expect(
      inst?.settingIcon(<Icon name="settings" size={22} color="white" />),
    ).toMatchSnapshot();
  });
  it('test the only function', () => {
    const wrapper = renderer.create(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>,
    );
    const inst = wrapper.getInstance();
    expect(
      inst?.camIcon(<Icon name="camera" size={20} color="white" />),
    ).toMatchSnapshot();
  });
  it('test the only function', () => {
    const wrapper = renderer.create(
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>,
    );
    const inst = wrapper.getInstance();
    expect(
      inst?.manIcon(<Icon name="man" size={22} color="white" />),
    ).toMatchSnapshot();
  });
});
