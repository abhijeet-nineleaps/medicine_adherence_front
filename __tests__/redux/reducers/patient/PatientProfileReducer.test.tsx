import PatientProfileReducer from "../../../../src/redux/reducers/patient/PatientProfileReducer";

describe("test patient profile",()=>{
    const result = PatientProfileReducer(undefined, {});
   it("should check for notify patient request",()=>{
       const action={
           "type":"GET_PATIENT_DETAILS",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = PatientProfileReducer(undefined, action);
   });
   it("should check for patient profile success",()=>{
       const action={
           "type":"SUCCES_PATIENT_DETAILS",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = PatientProfileReducer(undefined, action);
   });
   it("should check for patient profile error",()=>{
       const action={
           "type":"FAILED_PATIENT_DETAILS",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = PatientProfileReducer(undefined, action);
   });
})