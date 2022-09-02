import React from 'react';
import renderer from 'react-test-renderer';
import HistoryDetail from '../../../src/screens/components/HistoryDetail';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useEffect: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HistoryDetail data={undefined} modalVisibility={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<HistoryDetail modalVisibility={mockFn} />);
    wrapper.find('#delete').simulate('press');
  });
  // it('test fnc', () => {
  //   let mtitle = 'Night';
  //   const mockFunction = jest.fn(() => {
  //     return mtitle;
  //   });
  //   expect(mockFunction()).toBe(mtitle)
  // })

  // describe('test function', () => {
  //  const mockCallback = jest.fn(x => 42 + x);
  //   findTime([0, 1], mockCallback);
  //   expect(mockCallback.mock.calls.length).toBe(2);
  // })

  // it.only('should handle change if data === morning', () => {
  //   const wrapper = shallow(<HistoryDetail></HistoryDetail>);
  //   const ele = 2;
  //   wrapper.instance().findTime(select);
  //   expect(wrapper.state().data2).toEqual({ userId: 2, list: [] });
  // });

  // it.only('test', () => {
  //   let data = renderer.create(<HistoryDetail/> ).getInstance();
  //   console.log(data);
  // })
});
