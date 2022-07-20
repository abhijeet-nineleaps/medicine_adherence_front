import React from 'react';
import renderer from 'react-test-renderer';
import Reminder from '../../../src/screens/alarm/Reminder';

describe('Reminder Screen', () => {
  // it('renders correctly', () => {
  //   const tree = renderer
  //     .create(<Reminder route={undefined} navigation={undefined} />)
  //     .toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  it('checks for start date text', () => {
    const tree = renderer.create(<Reminder route={undefined} navigation={undefined} />);
    const text = tree.root.findByProps({testID: 'startDateText'}).props;
    expect(text.children).toEqual('Start Date')
  });
  it('checks for end date text', () => {
    const tree = renderer.create(<Reminder route={undefined} navigation={undefined} />);
    const text = tree.root.findByProps({testID: 'endDateText'}).props;
    expect(text.children).toEqual('End Date')
  });
  it('checks for title text', () => {
    const tree = renderer.create(<Reminder route={undefined} navigation={undefined} />);
    const text = tree.root.findByProps({testID: 'titleText'}).props;
    expect(text.children).toEqual('Add Title')
  });
  it('checks for select time text', () => {
    const tree = renderer.create(<Reminder route={undefined} navigation={undefined} />);
    const text = tree.root.findByProps({testID: 'selectTimeText'}).props;
    expect(text.children).toEqual('Select Time')
  });
});
