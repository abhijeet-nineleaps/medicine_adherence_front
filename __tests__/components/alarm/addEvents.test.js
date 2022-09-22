import Enzyme, {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import Addevent from '../../../src/components/alarm/addEvents';
Enzyme.configure({adapter: new Adapter()});
const mockStore = configureStore([]);
describe('test collector category', () => {
  it('test category', () => {
    const wrapper = shallow(<Addevent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});