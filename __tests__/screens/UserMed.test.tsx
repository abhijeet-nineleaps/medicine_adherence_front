import React from "react";
import renderer from 'react-test-renderer';
import UserMed from "../../src/screens/UserMed";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <UserMed route={undefined} navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});