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
function sendReqCaretaker(caret_username: string) {
  return {
    type: Types.SEND_CARETAKER_REQUEST,
    payload: caret_username,
  };
}
function sendReqCaretakerSuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_CARETAKER_REQUEST,
    payload: data,
  };
}
function sendReqCaretakerFailed(error) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_CARETAKER_REQUEST,
    payload: error,
  };
}

export const reqCaretakerActions = {
  sendReqCaretaker,
  sendReqCaretakerSuccess,
  sendReqCaretakerFailed,
};
