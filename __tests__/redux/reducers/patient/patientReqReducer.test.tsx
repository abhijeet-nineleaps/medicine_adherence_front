import patientReqReducers from "../../../../src/redux/reducers/patient/patientReqReducers";

describe("test patient req ",()=>{
    const result = patientReqReducers(undefined, {});
   it("should check for patient req request",()=>{
       const action={
           "type":"GET_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientReqReducers(undefined, action);
   });
   it("should check for patient req success",()=>{
       const action={
           "type":"SUCCES_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientReqReducers(undefined, action);
   });
   it("should check for patient req     error",()=>{
       const action={
           "type":"FAILED_PATIENT_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = patientReqReducers(undefined, action);
   });
})