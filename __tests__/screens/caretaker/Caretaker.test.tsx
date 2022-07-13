import React from 'react';
import renderer from 'react-test-renderer';
import CareTaker from '../../../src/screens/caretaker/Caretaker';

describe('Caretaker', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CareTaker navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
