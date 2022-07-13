import React from "react";
import renderer from 'react-test-renderer';
import Profile from "../../../src/screens/profile/Profile";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Profile navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});