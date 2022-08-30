import React from 'react';
import renderer from 'react-test-renderer';
import Reminder from '../../../src/screens/alarm/Reminder';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock("react-native-push-notification", () => ({
  default: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     id: {}
    }
  }),
}));
// jest.mock("react-native-elements", () => ({
//   default: jest.fn(),
// }));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Reminder navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Reminder savereminder={mockFn} />);
    wrapper.find('#reminder').simulate('press');
  });
  // it('test open save button', () => {
  //   const mockFn = jest.fn();
  //   const wrapper = shallow(<Reminder timearraystate={mockFn} />);
  //   wrapper.find('#timeState').simulate('press');
  // });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Reminder time_picker_mode_state={mockFn} />);
    wrapper.find('#time').simulate('press');
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Reminder pickerFnc={mockFn} />);
    wrapper.find('#picker').simulate('press');
  });
});
