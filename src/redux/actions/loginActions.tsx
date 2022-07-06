import Types from "./allTypes";
​
export function sendLoginRequest(data){
return{
    type: Types.LOGIN_REQUEST,
    payload:data,
};
}
​
export function sendLoginSuccess(data){
 return{
    type: Types.SUCCESS_LOGIN,
    payload: data,
 };
}
​
export function sendLoginFailure(error) {
    console.log(error, 'login failed');
    return{
        type: Types.FAILED_LOGIN,
        payload: error,
    };
}