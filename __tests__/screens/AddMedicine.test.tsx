import React from 'react';
import {renderer, act} from 'react-test-renderer';
import Addmedicine from '../../src/screens/AddMedicine';

describe('Add Medicine Screen', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Addmedicine navigation={undefined}/>);
    expect(tree).toMatchSnapshot();
  });
  it('checks for button', () => {
    const tree = renderer.create(<Addmedicine navigation={undefined}/>);
    const button = tree.root.findByProps({testID: 'addMedButton'}).props;
    act(() =>  button.onPress());
  })
});