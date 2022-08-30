import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Patientrequest from '../../../src/screens/patient/PatientRequest';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Patientrequest />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('test open save button', () => {
  //   const mockFn = jest.fn();
  //   const wrapper = shallow(<Patientrequest acceptrequest={mockFn} />);
  //   wrapper.find('#accept').simulate('press');
  // });
  // it('test open save button', () => {
  //   const mockFn = jest.fn();
  //   const wrapper = shallow(<Patientrequest deletereq={mockFn} />);
  //   wrapper.find('#delete').simulate('press');
  // });
});
