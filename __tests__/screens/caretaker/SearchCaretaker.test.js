import React from 'react';
import renderer from 'react-test-renderer';
import Searchcaretaker from '../../../src/screens/caretaker/SearchCaretaker';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Searchcaretaker navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  // it('test open save button', () => {
  //   const mockFn = jest.fn();
  //   const wrapper = shallow(<Searchcaretaker handleSubmit={mockFn} />);
  //   wrapper.find('#search').simulate('press');
  // });
  // it('test open save button', () => {
  //   const mockFn = jest.fn();
  //   const wrapper = shallow(<Searchcaretaker sendreqtocaretaker={mockFn} />);
  //   wrapper.find('#sendReq').simulate('press');
  // });
});
