import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import enableHooks from 'jest-react-hooks-shallow';
import toJson from 'enzyme-to-json';
import Caretakercomp from '../../../src/screens/caretaker/CaretakerComp';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
enableHooks(jest);
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('@react-native-google-signin/google-signin', () => ({
  default: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}));
jest.mock('@react-native-async-storage/async-storage', () => ({
  default: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  //...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({goBack: jest.fn()}),
  useFocusEffect: () => ({goBack: jest.fn()}),
  useRoute: () => ({
    params: {
      MedicineImages: 'img',
    },
  }),
}));

describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Caretakercomp navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Caretakercomp handleChange={mockFn} />);
    wrapper.find('#change').simulate('change');
  });
});
