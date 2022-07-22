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
function sendEmail(email: any) {
  return {
    type: Types.SEND_EMAIL,
    payload: email,
  };
}
function sendEmailSuccess(data) {
 // log.info(data, 'success');
  return {
    type: Types.SUCCESS_SEND_EMAIL,
    payload: data,
  };
}
function sendEmailFailed(error) {
 // log.error(error, 'ac');
  return {
    type: Types.FAILED_SEND_EMAIL,
    payload: error,
  };
}

export const emailCaretakerActions = {
  sendEmail,
  sendEmailSuccess,
  sendEmailFailed,
};
