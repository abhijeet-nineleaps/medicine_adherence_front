import React from 'react';
import renderer from 'react-test-renderer';
import adherence from '../../src/repositories/apis/adherence';
import axios from '../../src/repositories/apis/axios';
describe('test fetchimage', () => {
  it('test images', async () => {
    const payload = 'payload';
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
    adherence.medimages(payload);
  });
});
describe('test downloadpdf', () => {
  it('test images', async () => {
    const payload = 'payload';
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
    adherence.downloadPdf(payload);
  });
});
describe('test syncmed', () => {
  it('test images', async () => {
    const payload = 'payload';
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
    adherence.syncmeds(payload);
  });
});
describe('test getmedhistory', () => {
  it('test images', async () => {
    const payload = 'payload';
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
    adherence.getmedhistory(payload);
  });
});
describe('test syncmedhistory', () => {
  it('test images', async () => {
    const payload = 'payload';
    jest
      .spyOn(axios, 'get')
      .mockImplementation(jest.fn(() => Promise.resolve({data: 'dfghjk'})));
    adherence.syncmedicineHistory(payload);
  });
  it('test the only function', () => {
    const wrapper = renderer.create(<adherence />);
    const inst = wrapper.getInstance();
    expect(inst?.syncmedicineHistory(response.data)).toMatchSnapshot();
  });
});
