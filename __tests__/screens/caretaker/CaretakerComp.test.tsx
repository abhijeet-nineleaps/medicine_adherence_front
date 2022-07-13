import React from 'react';
import renderer from 'react-test-renderer';
import Caretakercomp from '../../../src/screens/caretaker/CaretakerComp';

describe('Caretaker component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Caretakercomp navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
