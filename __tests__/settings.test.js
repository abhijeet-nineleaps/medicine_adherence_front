import React from "react";
import renderer from 'react-test-renderer';
import Settings from "../src/screens/Settings";

describe('Settings', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Settings/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});