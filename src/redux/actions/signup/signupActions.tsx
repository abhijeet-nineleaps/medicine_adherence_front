import { logger } from 'react-native-logs';
import Types from '../allTypes';
interface Iparams {
  userinfo: any;
  token: string;
}
const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};
var log = logger.createLogger(defaultConfig);
function sendSignupRequest(params: Iparams) {
  return {
    type: Types.SIGNUP_REQUEST,
    payload: params,
  };
}
function SignupSuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_SIGNUP,
    payload: data,
  };
}
function SignupFailure(error) {
  log.error(error, 'login failed');
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
