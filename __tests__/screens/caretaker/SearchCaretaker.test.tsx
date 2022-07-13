import React from "react";
import renderer from 'react-test-renderer';
import Searchcaretaker from "../../../src/screens/caretaker/SearchCaretaker";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <Searchcaretaker navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});