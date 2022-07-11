import Types from "./allTypes";
​
function sendSignupRequest(userinfo, token){
return{
    type: Types.SIGNUP_REQUEST,
    payload: {userinfo,token},
};
}
​
function SignupSuccess(data){
 return{
    type: Types.SUCCESS_SIGNUP,
    payload: data,
 };
}
​
function SignupFailure(error) {
    console.log(error, 'login failed');
    return{
        type: Types.FAILED_SIGNUP,
        payload: error,
    };
}

export const signupActions = {
    sendSignupRequest,
    SignupSuccess,
    SignupFailure,
}