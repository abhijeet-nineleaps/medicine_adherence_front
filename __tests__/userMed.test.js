import React from "react";
import renderer from 'react-test-renderer';
import UserMed from "../src/screens/UserMed";

describe('UserMed Screen', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <UserMed/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});