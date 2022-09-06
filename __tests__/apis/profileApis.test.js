import { profile } from "../../src/repositories/apis/profile"
import axios from "../../src/repositories/apis/axios";
describe("test profile",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"put").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            profile.saveProfile(payload)
    })
})