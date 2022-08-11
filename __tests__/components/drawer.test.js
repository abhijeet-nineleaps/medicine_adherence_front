import Enzyme, { shallow } from "enzyme";
import { Provider } from "react-redux";
import renderer from 'react-test-renderer';
import React from "react";
import configureStore from "redux-mock-store";
import toJson from "enzyme-to-json";
import DrawerNavigator from "../../src/navigation/drawerNavigator";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);
jest.mock("@react-native-google-signin/google-signin", () => ({
    default: jest.fn(),
  }));
describe("test collector category", () => {
  let store;
  store = mockStore({
    field: {
      name: "hello",
      value: "San",
    },
  });
  it("test category", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <DrawerNavigator  />
      </Provider>
    );

    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<DrawerNavigator camFnc={mockFn} />);
    wrapper.find('#cam').simulate('press');
  });
});
describe('<FirstComponent /> functions', () => {
  it('test the only function', () => {
      //const val = <Icon name="home" size={22} color="white"/> 
      const wrapper = renderer.create(<DrawerNavigator/>);
      const inst = wrapper.getInstance();
      expect(inst.homeIcon(<Icon name="home" size={22} color="white"/>)).toMatchSnapshot();
  });
})