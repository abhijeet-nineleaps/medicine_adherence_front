import React from 'react';
import renderer from 'react-test-renderer';
import HistoryDetail from '../../../src/screens/components/HistoryDetail';

describe('History Details', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HistoryDetail data={undefined} modalVisibility={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
