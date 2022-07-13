import React from 'react';
import renderer from 'react-test-renderer';
import TodayPerformance from '../../../src/screens/adherence/TodayPerformance';

describe('Today Performance', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TodayPerformance route={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
