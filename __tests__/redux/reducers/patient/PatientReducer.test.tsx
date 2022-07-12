import PatientReducer from "../../../../src/redux/reducers/patient/PatientReducer";

describe("test patient",()=>{
    const result = PatientReducer(undefined, {});
   it("should check for patient request",()=>{
       const action={
           "type":"GET_PATIENT",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = PatientReducer(undefined, action);
   });
   it("should check for patient success",()=>{
       const action={
           "type":"SUCCES_PATIENT",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = PatientReducer(undefined, action);
   });
   it("should check for patient error",()=>{
       const action={
           "type":"FAILED_PATIENT",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = PatientReducer(undefined, action);
   });
})