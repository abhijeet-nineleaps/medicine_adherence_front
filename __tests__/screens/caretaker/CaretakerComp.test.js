import React from 'react';
import enableHooks from "jest-react-hooks-shallow";
import Caretakercomp from '../../../src/screens/caretaker/CaretakerComp';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});

enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
}));
jest.mock("react-native-elements", () => ({
  default: jest.fn(),
  Tab: {
    Item : () => ({}),
  },
  TabView: {
    Item: () => ({}),
  }
}));
jest.mock("react-native-paper", () => ({
  default: jest.fn(),
}));
const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
};
const props = {
  check2: true,
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
  },
};
describe('Click send image', () => {
  it('renders correctly', () => {
    
    const wrapper  = shallow(<Caretakercomp/>);
    expect(wrapper).toMatchSnapshot();
  });
  it("should call onDeleteList", () => {
    const checkforlogin = true;

    React.useState = jest.fn().mockReturnValue([checkforlogin, {}]);
    const wrapper = shallow(<Caretakercomp props={props} checkforlogin={true} />);
    const tree = findNodeByTestId(wrapper, "loginF");
    tree.props().onPress();
  });
 
  

});