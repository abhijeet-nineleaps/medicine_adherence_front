import patientReqAcceptReducer from "../../../../src/redux/reducers/patient/patientReqAcceptReducer";

describe("test patient req accept",()=>{
    const result = patientReqAcceptReducer(undefined, {});
   it("should check for patient req accept request",()=>{
       const action={
           "type":"ACCEPT_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientReqAcceptReducer(undefined, action);
   });
   it("should check for patient req accept success",()=>{
       const action={
           "type":"SUCCES_ACCEPT_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientReqAcceptReducer(undefined, action);
   });
   it("should check for patient req accept error",()=>{
       const action={
           "type":"FAILED_ACCEPT_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientReqAcceptReducer(undefined, action);
   });
})