import React from 'react';
import {create} from 'react-test-renderer';
import Settings from '../../src/screens/Settings';

describe('Settins Screen', () => {
  it('renders correctly', () => {
    const tree = create(<Settings navigation={undefined}/>);
    expect(tree).toMatchSnapshot();
  });
  it('checks for button', async () => {
    const  findByTestId = 
   create(<Settings navigation={undefined}/>);
    expect(findByTestId).toBeTruthy();
  });
});
