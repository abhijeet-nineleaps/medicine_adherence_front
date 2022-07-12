import React from "react";
import renderer from 'react-test-renderer';
import OnboardingScreen from "../../src/screens/OnboardingScreen";

describe('About App', () => {
    it('renders correctly', () =>{
        const tree = renderer.create(
            <OnboardingScreen navigation={undefined}/>    
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});