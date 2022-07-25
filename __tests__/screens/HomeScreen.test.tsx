import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen';

describe('Click send image', () => {
//   it('renders correctly', () => {
//     const tree = renderer
//       .create(<HomeScreen />)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
  it('checks for text', () => {
    const tree = renderer.create(<HomeScreen />);
    const text = tree.root.findByProps({testID: 'timingText'}).props;
    expect(text.children).toEqual('Timings')
  })
});
