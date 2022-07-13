import React from "react";
import renderer from 'react-test-renderer';
import SendImageToCaretaker from "../../../src/screens/adherence/SendImageToCaretaker";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <SendImageToCaretaker route={undefined} navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});