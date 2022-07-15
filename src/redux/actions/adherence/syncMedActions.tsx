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
function syncMeds(user_id: string) {
  return {
    type: Types.SYNC_MEDS,
    payload: user_id,
  };
}
function syncMedSuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_SYNC_MEDS,
    payload: data,
  };
}
function syncMedsError(error) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_SYNC_MEDS,
    payload: error,
  };
}

export const syncMedActions = {
  syncMeds,
  syncMedSuccess,
  syncMedsError,
};
