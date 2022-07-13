import React from 'react';
import renderer from 'react-test-renderer';
import OnboardingScreen from '../../src/screens/OnboardingScreen';

describe('OnBoarding Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<OnboardingScreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
