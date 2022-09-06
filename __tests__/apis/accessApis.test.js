import React from "react";
import renderer from 'react-test-renderer';
import { Signupuser } from "../../src/repositories/apis/access";
import axios from "../../src/repositories/apis/axios";
describe("test fetchimage",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            Signupuser.loginuser(payload)
    });
    // it('test the only function', () => {
    //     const wrapper = renderer.create(<Signupuser />);
    //     const inst = wrapper.getInstance();
    //     expect(inst?.signup(response.data)).toMatchSnapshot();
    //   });
})
describe("test downloadpdf",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            Signupuser.signup(payload)
    });
    // it('test the only function', () => {
    //     const wrapper = renderer.create(<Signupuser />);
    //     const inst = wrapper.getInstance();
    //     expect(inst?.loginuser(response.data)).toMatchSnapshot();
    //   });
})