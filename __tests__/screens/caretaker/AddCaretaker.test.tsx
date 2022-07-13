import React from "react";
import renderer from 'react-test-renderer';
import Addcaretaker from "../../../src/screens/caretaker/AddCaretaker";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Addcaretaker navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});