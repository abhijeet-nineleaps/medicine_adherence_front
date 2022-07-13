import React from "react";
import renderer from 'react-test-renderer';
import SavedDetails from "../../../src/screens/profile/SavedDetails";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <SavedDetails/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});