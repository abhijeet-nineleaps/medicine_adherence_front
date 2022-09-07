import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Patientrequest from '../../../src/screens/patient/PatientRequest';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn().mockImplementation((func) => func()),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Patientrequest />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test the only function', () => {
    let ci_id = 'asdf';
    const wrapper = renderer.create(<Patientrequest {...ci_id}/>);
    const inst = wrapper.getInstance();
    expect(inst?.acceptrequest()).toMatchSnapshot();
  });
  it('test the only function', () => {
    let ci_id = 'asdf';
    const wrapper = renderer.create(<Patientrequest {...ci_id}/>);
    const inst = wrapper.getInstance();
    expect(inst?.deletereq()).toMatchSnapshot();
  });
});