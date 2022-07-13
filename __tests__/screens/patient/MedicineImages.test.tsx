import React from "react";
import renderer from 'react-test-renderer';
import MedicineImages from "../../../src/screens/patient/MedicineImages";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <MedicineImages route={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});