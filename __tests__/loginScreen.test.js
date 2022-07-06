import React from "react";
import renderer from 'react-test-renderer';
import Loginscreen from "../src/screens/login/LoginScreen";

describe('Login Screen', () => { 
    it('renders correctly', () => {
        const tree = renderer.create(
            <Loginscreen/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
 });