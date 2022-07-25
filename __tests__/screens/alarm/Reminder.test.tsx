import React from 'react';
import renderer from 'react-test-renderer';
import Reminder from '../../../src/screens/alarm/Reminder';

describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Reminder navigation={undefined} route={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
