import React from 'react';
import renderer from 'react-test-renderer';
import Mypatient from '../../../src/screens/patient/MyPatients';

describe('My Patients', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Mypatient navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
