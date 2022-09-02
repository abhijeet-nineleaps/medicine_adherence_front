import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Addcaretaker from '../../../src/screens/caretaker/AddCaretaker'
Enzyme.configure({adapter: new Adapter()});
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("@react-native-async-storage/async-storage", () => ({
    default: jest.fn(),
  }));

describe('Caretaker Request', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Addcaretaker navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
    it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Addcaretaker search={mockFn} />);
    wrapper.find('#search').simulate('press');
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Addcaretaker del={mockFn} />);
    wrapper.find('#delete').simulate('press');
  });
});

// describe('Click send image', () => {
//   // it('renders correctly', () => {
//   //   const tree = renderer
//   //     .create(<Addcaretaker navigation={undefined} />)
//   //     .toJSON();
//   //   expect(tree).toMatchSnapshot();
//   // });
//   it('test open save button', () => {
//     const mockFn = jest.fn();
//     const wrapper = shallow(<Addcaretaker search={mockFn} />);
//     wrapper.find('#search').simulate('press');
//   });
//   // it('test open save button', () => {
//   //   const mockFn = jest.fn();
//   //   const wrapper = shallow(<Addcaretaker emp={mockFn} />);
//   //   wrapper.find('#emp').simulate('press');
//   // });
//   it('test open save button', () => {
//     const mockFn = jest.fn();
//     const wrapper = shallow(<Addcaretaker del={mockFn} />);
//     wrapper.find('#delete').simulate('press');
//   });
// });
