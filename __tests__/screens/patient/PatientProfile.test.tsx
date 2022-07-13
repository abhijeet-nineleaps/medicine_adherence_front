import React from 'react';
import renderer from 'react-test-renderer';
import ViewProfile from '../../../src/screens/patient/PatientProfile';

describe('Patient Profile', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ViewProfile route={undefined} navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
