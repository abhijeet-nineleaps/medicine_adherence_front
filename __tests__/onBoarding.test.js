import React from "react";
import renderer from 'react-test-renderer';
import OnboardingScreen from "../src/screens/Onboarding";

describe('On boarding', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <OnboardingScreen/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});