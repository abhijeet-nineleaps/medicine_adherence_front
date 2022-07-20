import React from 'react';
import renderer from 'react-test-renderer';
import HistoryDetail from '../../../src/screens/components/HistoryDetail';

describe('History Details', () => {
  // it('renders correctly', () => {
  //   const tree = renderer
  //     .create(<HistoryDetail data={undefined} modalVisibility={undefined} />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  it('checks for text', () => {
    const tree = renderer.create(<HistoryDetail data={undefined} modalVisibility={undefined}/>);
    const text = tree.root.findByProps({testID: 'dateText'}).props;
    expect(text.children).toEqual('Date - ')
  })
});
