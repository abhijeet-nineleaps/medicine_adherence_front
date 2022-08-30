import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Profile from '../../../src/screens/profile/Profile';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Profile navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open edit button', () => {
    const mockFn = jest.fn();
   const wrapper = shallow(<Profile editstate={mockFn} />);
   wrapper.find("#edit").simulate("press");
   });
  //  it('test open save button', () => {
  //   const mockFn = jest.fn();
  //  const wrapper = shallow(<Profile handleSubmit={mockFn} />);
  //  wrapper.find("#save").simulate("press");
  //  });
  //  it('Should set value to state when input is changed', () => {
  //   const container = shallow(<Profile />);
  //   const input = container.find('itemchange');
  //   input.simulate('change', 'Bloodgroup');
  //   expect(container).toMatchSnapshot();
  // });
  
  // it('test open save button', () => {
  //   const mockFn = jest.fn();
  //  const wrapper = shallow(<Profile change1={mockFn} />);
  //  wrapper.find("#gender").simulate("change");
  //  });
});
// describe('<FirstComponent /> functions', () => {
//   it('test the only function', () => {
//       //const val = <Icon name="home" size={22} color="white"/> 
//       const wrapper = renderer.create(<Profile/>);
//       const inst = wrapper.getInstance();
//       expect(inst.userIcon(<Icon name="home" size={22} color="white"/>)).toMatchSnapshot();
//   });
//   it('test the only function', () => {
//     //const val = <Icon name="home" size={22} color="white"/> 
//     const wrapper = renderer.create(<Profile/>);
//     const inst = wrapper.getInstance();
//     expect(inst.weightIcon(<Icon size={18} name="weight" color="#3743ab"></Icon>)).toMatchSnapshot();
// });
// it('test the only function', () => {
//   //const val = <Icon name="home" size={22} color="white"/> 
//   const wrapper = renderer.create(<Profile/>);
//   const inst = wrapper.getInstance();
//   expect(inst.phoneIcon(<Icon name="home" size={22} color="white"/>)).toMatchSnapshot();
// });
// })
