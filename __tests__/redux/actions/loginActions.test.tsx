import { loginActions } from "../../../src/redux/actions/loginActions";
import Types from "../../../src/redux/actions/allTypes";
describe("test loginActions",()=>{
    const data = "1"
    const err = "SomeError"
    const params1= "userinfo"
    const params2= "token"
    it("test sendLoginRequest",()=>{
        expect(loginActions.sendLoginRequest(params1, params2)).toEqual({
            type: Types.LOGIN_REQUEST,
            payload: {params1,params2},
        })
    })
    it("test LoginSuccess",()=>{
        expect(loginActions.LoginSuccess(data)).toEqual({
            type: Types.SUCCESS_LOGIN,
            payload:data,
        })
    })
    it("test LoginError",()=>{
        expect(loginActions.LoginFailure(err)).toEqual({
            type: Types.FAILED_LOGIN,
            payload:err,
        })
    })
})