import React from 'react';
import renderer from 'react-test-renderer';
import AdherenceHistory from '../../../src/screens/adherence/AdherenceHistory';

describe('Adherence History', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AdherenceHistory />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
