import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import queryData from '../../src/repositories/database/queryData';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
import axios from '../../src/repositories/apis/axios';
Enzyme.configure({adapter: new Adapter()});
describe('queryData', () => {
  it('render component', () => {
    const wrapper = shallow(<queryData />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test Touchable Opacity', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<queryData function={mockFn} />);
    expect(mockFn).toHaveBeenCalled;
  });
  describe('test querydata', () => {
    it('test getusermeds', async () => {
      const payload = 'payload';
      jest
        .spyOn(axios, 'get')
        .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
      queryData.getusermeds(payload);
    });
  });
});
