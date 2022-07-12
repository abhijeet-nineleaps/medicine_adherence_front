import React from "react";
import renderer from 'react-test-renderer';
import Settings from "../../src/screens/Settings";


describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Settings navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});