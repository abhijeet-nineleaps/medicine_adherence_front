import Types from "./allTypes";
​
function sendLoginRequest(userinfo, token){
return{
    type: Types.LOGIN_REQUEST,
    payload: userinfo, token,
};
}
​
function LoginSuccess(data){
 return{
    type: Types.SUCCESS_LOGIN,
    payload: data,
 };
}
​
function LoginFailure(error) {
    console.log(error, 'login failed');
    return{
        type: Types.FAILED_LOGIN,
        payload: error,
    };
}

export const loginActions = {
    sendLoginRequest,
    LoginSuccess,
    LoginFailure,
}