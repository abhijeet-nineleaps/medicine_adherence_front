import React from "react";
import renderer from 'react-test-renderer';
import PatientReport from "../../../src/screens/patient/PatientReport";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <PatientReport route={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});