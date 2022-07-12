import Types from '../allTypes';
interface Iparams {
  userinfo: any;
  token: string;
}
function sendSignupRequest(params: Iparams) {
  return {
    type: Types.SIGNUP_REQUEST,
    payload: params,
  };
}
function SignupSuccess(data) {
  return {
    type: Types.SUCCESS_SIGNUP,
    payload: data,
  };
}
function SignupFailure(error) {
  console.log(error, 'login failed');
  return {
    type: Types.FAILED_SIGNUP,
    payload: error,
  };
}

export const signupActions = {
  sendSignupRequest,
  SignupSuccess,
  SignupFailure,
};
