import React from 'react';
import {renderer, act} from 'react-test-renderer';
import Settings from '../../src/screens/Settings';

describe('Settins Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Settings navigation={undefined}/>);
    expect(tree).toMatchSnapshot();
  });
  it('checks for button', () => {
    const tree = renderer.create(<Settings navigation={undefined}/>);
    const button = tree.root.findByProps({testID: 'openSettings'}).props;
    act(() =>  button.onPress());
  })
});
