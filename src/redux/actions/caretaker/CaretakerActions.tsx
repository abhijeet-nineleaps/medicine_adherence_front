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

export default function fetchCaretakers(medId: string) {
  return {
    type: Types.GET_CARETAKERS,
    payload: medId,
  };
}
function fetchCaretakerssuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.Success_CareTAKER_REQUEST,
    payload: data,
  };
}
function fetchCaretakerserror(error) {
  log.error(error, 'ac');
  return {
    type: Types.Failed_CareTAKER_REQUEST,
    payload: error,
  };
}

export const CaretakerActions = {
  fetchCaretakerssuccess,
  fetchCaretakerserror,
  fetchCaretakers,
};
