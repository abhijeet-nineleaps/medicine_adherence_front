import React from "react";
import renderer from 'react-test-renderer';
import Medicineadherence from "../../../src/screens/adherence/MedicineAdherence";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Medicineadherence navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});