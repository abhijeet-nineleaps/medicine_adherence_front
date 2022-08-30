import React from 'react';
import Enzyme, { shallow } from "enzyme";
import {cleanup } from '@testing-library/react-native';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import renderer from 'react-test-renderer';
import Addmedicine from '../../src/screens/AddMedicine';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
Enzyme.configure({ adapter: new Adapter() });
describe('Click send image', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const tree = renderer
      .create(<Addmedicine navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('test open setting button', () => {
  //   const mockFn = jest.fn();
  //  const wrapper = shallow(<Addmedicine addRemFnc={mockFn} />);
  //  wrapper.find("#addRem").simulate("press");
  //  });
  //  it('test open setting button', () => {
  //   const mockFn = jest.fn();
  //  const wrapper = shallow(<Addmedicine deleteMedFnc={mockFn} />);
  //  wrapper.find("#deleteMed").simulate("press");
  //  });
   it('test open setting button', () => {
    const mockFn = jest.fn();
   const wrapper = shallow(<Addmedicine addMedFnc={mockFn} />);
   wrapper.find("#addMedButton").simulate("press");
   });
});