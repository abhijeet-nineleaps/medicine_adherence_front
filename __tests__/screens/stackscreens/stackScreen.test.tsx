import React from "react";
import renderer from 'react-test-renderer';
import Stackscreen from "../../../src/screens/stackscreens/StackScreen";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Stackscreen/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});