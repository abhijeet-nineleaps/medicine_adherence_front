import React from 'react';
import renderer from 'react-test-renderer';
import networkCalls from '../../src/repositories/apis/networkCalls';
import axios from '../../src/repositories/apis/axios';
describe('test fetchimage', () => {
  it('test images', async () => {
    const payload = 'payload';
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
    networkCalls.synchistory(payload);
  });
  it('test the only function', () => {
    const wrapper = renderer.create(<networkCalls />);
    const inst = wrapper.getInstance();
    expect(inst?.synchistory(response)).toMatchSnapshot();
  });
});
describe('test downloadpdf', () => {
  it('test images', async () => {
    const payload = 'payload';
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
    networkCalls.getmedicineHistory(payload);
  });
  it('test the only function', () => {
    const wrapper = renderer.create(<networkCalls />);
    const inst = wrapper.getInstance();
    expect(inst?.getmedicineHistory(response.json())).toMatchSnapshot();
  });
});
describe('test downloadpdf', () => {
  it('test images', async () => {
    const payload = 'payload';
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
    networkCalls.fetchCaretakers(payload);
  });
  it('test the only function', () => {
    const wrapper = renderer.create(<networkCalls />);
    const inst = wrapper.getInstance();
    expect(inst?.fetchCaretakers(response.json())).toMatchSnapshot();
  });
});
