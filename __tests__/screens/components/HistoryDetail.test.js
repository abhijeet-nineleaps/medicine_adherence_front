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
});
