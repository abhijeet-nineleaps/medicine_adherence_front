import React from 'react';
import renderer from 'react-test-renderer';

import enableHooks from "jest-react-hooks-shallow";
import{ Mypatient} from '../../../src/screens/patient/MyPatients';
import {Enzyme,shallow} from 'enzyme';

enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
const props = {
  check2: true,
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
  },
};

const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
};

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
}));
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Mypatient navigation={undefined}/>)
      .toJSON();
      
    expect(tree).toMatchSnapshot();
  });
  // it("should call onDeleteList", () => {
  //   const wrapper = shallow(<Mypatient navigation={props.navigation} />);
  //   const tree = findNodeByTestId(wrapper, "nav");
  //   tree.props().onPress();
  // });
   

});