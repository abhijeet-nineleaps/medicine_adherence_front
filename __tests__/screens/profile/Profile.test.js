
import React from 'react';
import renderer from 'react-test-renderer';
import { Formik } from 'formik';
import {Picker} from '@react-native-picker/picker';
import toJson from 'enzyme-to-json';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Profile from '../../../src/screens/profile/Profile';
import { profile } from '../../../src/redux/apis/profile';
import { TextInput } from 'react-native-paper';
import { render } from '@testing-library/react-native';
import Mypatient from '../../../src/screens/patient/MyPatients';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-native-google-signin/google-signin', () => {
  return {
  GoogleSignin: jest.fn().mockImplementation(() => {
  return null;
  }),
  };
  });
global.alert=jest.fn();
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
  
}));
const props = {
  navigation: {
    addListener: jest.fn(),
    navigate: jest.fn(),
    Bio: jest.fn(),
    Contact: jest.fn(),
    Age: jest.fn(),
    Weight: jest.fn(),
    Gender: jest.fn(),
    MaritalStatus: jest.fn(),
    BloodGroup: jest.fn(),
  },
};
const findNodeByTestId = (wrapper, testID) => {
  return wrapper.findWhere((node) => {
    return node.prop("testID") === testID;
  });
}
describe('Click send image', () => {
  it('renders correctly', () => {
    // const tree = renderer
    //   .create(<Profile navigation={undefined}/>)
    //   .childAt(0).dive();
     
    // expect(tree).toMatchSnapshot();


    const wrapper = shallow(<Profile/>);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test open edit button', () => {
    const mockFn = jest.fn();
   const wrapper = shallow(<Profile editstate={mockFn} />);
   wrapper.find("#edit").simulate("press");
   });
   
});
describe('<FirstComponent /> functions', () => {
  it('test the only function', () => {
    
      const wrapper = renderer.create(<Profile/>);
      const inst = wrapper.getInstance();
      expect(inst?.userIcon(<Icon name="home" size={22} color="white"/>)).toMatchSnapshot();
  });
  it('test the only function', () => {
  
    const wrapper = renderer.create(<Profile/>);
    const inst = wrapper.getInstance();
    expect(inst?.weightIcon(<Icon size={18} name="weight" color="#3743ab"></Icon>)).toMatchSnapshot();
});
it('test the only function', () => { 
  const wrapper = renderer.create(<Profile/>);
  const inst = wrapper.getInstance();
  expect(inst?.phoneIcon(<Icon name="home" size={22} color="white"/>)).toMatchSnapshot();
});
it("test for editstate", () => {
  const wrapper = shallow(<Profile navigation={props.navigation} />);
  const tree = findNodeByTestId(wrapper, "estate");
  tree.props().onPress();
});
// it("test for userIcon", () => {
//   const editenabled = true;

//     React.useState = jest.fn().mockReturnValue([editenabled, {}]);
//   const wrapper = shallow(<Profile navigation={props.navigation} />);
//   const tree = findNodeByTestId(wrapper, "userID");
//   tree.props().left();
// });
// it("test for phoneIcon", () => {
  
//   const wrapper = shallow(<Profile navigation={props.navigation} />);
//   const tree = findNodeByTestId(wrapper, "phoneID");
//   tree.props().left();
// });
// it("test for weightIcon", () => {
//   const editenabled = true;
//   const name={user: {name: 'Not logged in!', photo: '', email: ''}}

//     React.useState = jest.fn().mockReturnValue([editenabled, {}]);
//     React.useState = jest.fn().mockReturnValue([name, {}]);
  
//     const wrapper = shallow(<Profile navigation={props.navigation} />);
//   const tree = findNodeByTestId(wrapper, "weightID");
//   console.log(wrapper.debug(),"30")
//   // tree.props().left();
// });
jest.mock("@react-native-picker/picker", () => props => (
  <input
  testID="marital"
    onValueChange={() => {
      console.log(props.onChange);
      props.onValueChange("maritalstatus");
    }}
  />
));
const storeuserdetails = jest.fn();
  
  it("button click ", () => {
    const component = shallow(<Profile onSubmit={storeuserdetails} />);
     component.find("Formik").simulate("submit");
    expect(component).toMatchSnapshot();
    component.unmount();
  });
//   describe('Click send image', () => {
//   it("should call onDeleteList", () => {
//     const wrapper = shallow(<Profile navigation={props.navigation} />);
//     const tree = findNodeByTestId(wrapper, "log");
//     tree.props().validationSchema;
//   });
// });
});



