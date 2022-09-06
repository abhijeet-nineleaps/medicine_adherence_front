import { Signupuser } from "../../src/repositories/apis/access";
import axios from "../../src/repositories/apis/axios";
describe("test fetchimage",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            Signupuser.loginuser(payload)
    })
})
describe("test downloadpdf",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            Signupuser.signup(payload)
    })
})