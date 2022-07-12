import ProfileReducer from "../../../../src/redux/reducers/profile/ProfileReducer";

describe("test profile",()=>{
    const result = ProfileReducer(undefined, {});
   it("should check for profile request",()=>{
       const action={
           "type":"SAVE_PROFILE",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = ProfileReducer(undefined, action);
   });
   it("should check for profile success",()=>{
       const action={
           "type":"SUCCESS_PROFILE",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = ProfileReducer(undefined, action);
   });
   it("should check for profile error",()=>{
       const action={
           "type":"FAILED_PROFILE",
           "payload":"[]",
       }
       const expectedState = {
           data: action.payload
       }
       const result = ProfileReducer(undefined, action);
   });
})