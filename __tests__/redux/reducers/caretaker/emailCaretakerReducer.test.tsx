import emailCaretakerReducer from "../../../../src/redux/reducers/caretaker/emailCaretakerReducer";

describe("test email caretaker",()=>{
    const result = emailCaretakerReducer(undefined, {});
   it("should check for email caretaker request",()=>{
       const action={
           "type":"SEND_EMAIL",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = emailCaretakerReducer(undefined, action);
   });
   it("should check for email caretaker",()=>{
       const action={
           "type":"SUCCESS_SEND_EMAIL",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = emailCaretakerReducer(undefined, action);
   });
   it("should check for email caretaker",()=>{
       const action={
           "type":"FAILED_SEND_EMAIL",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = emailCaretakerReducer(undefined, action);
   });
})