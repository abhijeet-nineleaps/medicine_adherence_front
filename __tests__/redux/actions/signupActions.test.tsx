import { signupActions } from "../../../src/redux/actions/signupActions";
import Types from "../../../src/redux/actions/allTypes";
describe("test signupActions",()=>{
    const data = "1"
    const err = "SomeError"
    const params1= "userinfo"
    const params2= "token"
    it("test sendSignupRequest",()=>{
        expect(signupActions.sendSignupRequest(params1, params2)).toEqual({
            type: Types.SIGNUP_REQUEST,
            payload: {params1,params2},
        })
    })
    it("test SignupeSuccess",()=>{
        expect(signupActions.SignupSuccess(data)).toEqual({
            type: Types.SUCCESS_SIGNUP,
            payload:data,
        })
    })
    it("test SignupError",()=>{
        expect(signupActions.SignupFailure(err)).toEqual({
            type: Types.FAILED_SIGNUP,
            payload:err,
        })
    })
})