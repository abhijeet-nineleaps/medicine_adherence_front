import Types from '../allTypes';

interface Iparams {
  userinfo: any;
  token: string;
}

function sendLoginRequest(params) {
  return {
    type: Types.LOGIN_REQUEST,
    payload: params,
  };
}
function LoginSuccess(data) {
  return {
    type: Types.SUCCESS_LOGIN,
    payload: data,
  };
}
function LoginFailure(error) {
  console.log(error, 'login failed');
  return {
    type: Types.FAILED_LOGIN,
    payload: error,
  };
}

export const loginActions = {
  sendLoginRequest,
  LoginSuccess,
  LoginFailure,
};
