import downloadPdfReducer from "../../../../src/redux/reducers/adherence/downloadPdfReducer";

describe("test download pdf",()=>{

   const result = downloadPdfReducer(undefined, {});
   it("should check for download pdf request",()=>{
       const action={
           "type":"PDF_DOWNLOAD",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = downloadPdfReducer(undefined, action);
   });
   it("should check for history syncing",()=>{
       const action={
           "type":"SUCCESS_PDF_DOWNLOAD",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = downloadPdfReducer(undefined, action);
   });
   it("should check for history syncing",()=>{
       const action={
           "type":"FAILED_PDF_DOWNLOAD",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = downloadPdfReducer(undefined, action);
   });
})