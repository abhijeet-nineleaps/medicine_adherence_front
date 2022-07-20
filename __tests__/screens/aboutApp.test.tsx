import React from 'react';
import renderer from 'react-test-renderer';
import About from '../../src/screens/AboutApp';

describe('About App', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<About />);
    expect(tree).toMatchSnapshot();
  });
  it('checks for text', () => {
    const tree = renderer.create(<About />);
    const text = tree.root.findByProps({testID: 'aboutText'}).props;
    expect(text.children).toEqual('Medicine Adherence app which allows user to use medicine, reminder, caretaker, patient, report and more features and never skip their medications.')
  })
});