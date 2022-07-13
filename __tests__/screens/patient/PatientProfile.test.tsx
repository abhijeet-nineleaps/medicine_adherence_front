import React from "react";
import renderer from 'react-test-renderer';
import ViewProfile from "../../../src/screens/patient/PatientProfile";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <ViewProfile route={undefined} navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});