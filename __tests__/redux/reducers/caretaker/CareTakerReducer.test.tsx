import CareTakerReducer from "../../../../src/redux/reducers/caretaker/CareTakerReducer";

describe("test caretaker",()=>{
    const result = CareTakerReducer(undefined, {});
   it("should check for caretaker request",()=>{
       const action={
           "type":"GET_CARETAKERS",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = CareTakerReducer(undefined, action);
   });
   it("should check for caretaker",()=>{
       const action={
           "type":"Success_CareTAKER_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = CareTakerReducer(undefined, action);
   });
   it("should check for caretaker",()=>{
       const action={
           "type":"Failed_CareTAKER_REQUEST",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = CareTakerReducer(undefined, action);
   });
})