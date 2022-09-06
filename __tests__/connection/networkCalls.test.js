import networkCalls from "../../src/repositories/apis/networkCalls"
import axios from "../../src/repositories/apis/axios";
describe("test fetchimage",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            networkCalls.synchistory(payload)
    })
})
describe("test downloadpdf",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            networkCalls.getmedicineHistory(payload)
    })
})
describe("test downloadpdf",()=>{
    it("test images",async ()=>{
        const payload="payload"
        jest.spyOn(axios,"get").mockImplementation(
            jest.fn(()=>Promise.resolve({data:"dfghjk"})))
            networkCalls.fetchCaretakers(payload)
    })
})