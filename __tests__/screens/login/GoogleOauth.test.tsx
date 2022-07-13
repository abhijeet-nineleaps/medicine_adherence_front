import React from "react";
import renderer from 'react-test-renderer';
import Login from "../../../src/screens/login/GoogleOauth";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Login navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});