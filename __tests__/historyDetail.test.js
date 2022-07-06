import React from "react";
import renderer from 'react-test-renderer';
import HistoryDetail from "../src/screens/components/HistoryDetail";

describe('History Detail', () => { 
    it('renders correctly', () => {
        const tree = renderer.create(
            <HistoryDetail/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
 });