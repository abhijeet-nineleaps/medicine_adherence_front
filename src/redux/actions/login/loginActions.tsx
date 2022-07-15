import {logger} from 'react-native-logs';
import Types from '../allTypes';
const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      debug: 'greenBright',
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};

var log = logger.createLogger(defaultConfig);

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
  log.info('successful login');
  return {
    type: Types.SUCCESS_LOGIN,
    payload: data,
  };
}
function LoginFailure(error) {
  log.error(error, 'login failed');
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
