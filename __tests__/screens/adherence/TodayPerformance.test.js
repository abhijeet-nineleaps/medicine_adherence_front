import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TodayPerformance from '../../../src/screens/adherence/TodayPerformance';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({goBack: jest.fn()}),
  useEffect: jest.fn() ,
  useRoute: () => ({
    params: {
      user_id: 'sampleID',
    },
  }),
}));
describe('Today performance ', () => {
  it('test', () => {
    const wrapper = shallow(<TodayPerformance />)
      .childAt(0)
      .dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});