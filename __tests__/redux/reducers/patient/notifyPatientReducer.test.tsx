import notifyPatientReducer from "../../../../src/redux/reducers/patient/notifyPatientReducer";

describe("test notify patient",()=>{
    const result = notifyPatientReducer(undefined, {});
   it("should check for notify patient request",()=>{
       const action={
           "type":"NOTIFY_PATIENT",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = notifyPatientReducer(undefined, action);
   });
   it("should check for notify patient success",()=>{
       const action={
           "type":"SUCCESS_NOTIFY_PATIENT",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = notifyPatientReducer(undefined, action);
   });
   it("should check for notify patient error",()=>{
       const action={
           "type":"FAILED_NOTIFY_PATIENT",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = notifyPatientReducer(undefined, action);
   });
})