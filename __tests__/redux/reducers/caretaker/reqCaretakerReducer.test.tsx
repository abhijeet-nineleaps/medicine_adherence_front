import reqCaretakerReducer from "../../../../src/redux/reducers/caretaker/reqCaretakerReducer";

describe("test request caretaker",()=>{
    const result = reqCaretakerReducer(undefined, {});
   it("should check for request caretaker request",()=>{
       const action={
           "type":"SEND_CARETAKER_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = reqCaretakerReducer(undefined, action);
   });
   it("should check for request caretaker",()=>{
       const action={
           "type":"SUCCESS_CARETAKER_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = reqCaretakerReducer(undefined, action);
   });
   it("should check for request caretaker",()=>{
       const action={
           "type":"FAILED_CARETAKER_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = reqCaretakerReducer(undefined, action);
   });
})