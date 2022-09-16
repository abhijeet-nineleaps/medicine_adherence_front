import React from 'react';
import AdherenceHistory from '../../../src/screens/adherence/AdherenceHistory';
import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import {FlatList, Modal} from 'react-native';
import Toast from 'react-native-toast-message';

Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}));
jest.mock('rn-fetch-blob', () => ({
  default: jest.fn(),
}));
jest.mock('react-native-toast-message', () => ({
  show: jest.fn(),
  hide: jest.fn()
}));
describe('AdherenceHistory Screen', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AdherenceHistory />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test modal', () => {
    const wrapper = shallow(<AdherenceHistory />);
    wrapper.find(Modal).props().onRequestClose('');
  });
  it('test flatlist', () => {
    let sdate = null;
    const wrapper = shallow(<AdherenceHistory {...sdate} />);
    wrapper.find(FlatList).props().renderItem('');
    wrapper.find(FlatList).props().renderItem('').props.showimgfun(sdate);
    expect(Toast.show).toHaveBeenCalled;
  });
  it('test flatlist', () => {
    let sdate = '2001/05/29';
    const wrapper = shallow(<AdherenceHistory {...sdate} />);
    wrapper.find(FlatList).props().renderItem('');
    wrapper.find(FlatList).props().renderItem('').props.showimgfun(sdate);
    expect(Toast.show).toHaveBeenCalled;
  });
  it('test button perm', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<AdherenceHistory perm={mockFn} />);
    wrapper.find('#perm').simulate('press');
    expect(mockFn).toHaveBeenCalled;
  });
});
