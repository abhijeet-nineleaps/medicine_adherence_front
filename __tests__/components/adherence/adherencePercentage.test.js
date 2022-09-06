import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import toJson from 'enzyme-to-json';
import axios from '../../../src/repositories/apis/axios';
import AdherencePercentage from '../../../src/components/adherence/adherencePercentage';
Enzyme.configure({adapter: new Adapter()});

describe('test adherence per', () => {
  it('test category', () => {
    const wrapper = shallow(<AdherencePercentage />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  describe('test querydata', () => {
    it('test getusermeds', async () => {
      const payload = 'payload';
      jest
        .spyOn(axios, 'get')
        .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
      AdherencePercentage(payload);
    });
  });
});
