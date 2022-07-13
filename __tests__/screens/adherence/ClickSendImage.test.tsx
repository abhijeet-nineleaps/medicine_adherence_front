import React from "react";
import renderer from 'react-test-renderer';
import CameraScreen from "../../../src/screens/adherence/ClickSendImage";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <CameraScreen navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});