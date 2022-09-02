import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TodayPerformance from '../../../src/screens/adherence/TodayPerformance';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: jest.fn()}),
  useRoute: () => ({
    params: {
     user_id : 'sampleID'
    },
  }),
}));
// jest.mock('react-native-sqlite-storage', () => ({
//   default: jest.fn(),
// }));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<TodayPerformance />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
