import {logger} from 'react-native-logs';
import Types from '../allTypes';

interface Iparams {
  meds_id: any;
  syncData: any;
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
      debug: 'greenBright',
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};

var log = logger.createLogger(defaultConfig);

function syncHistory(params: Iparams) {
  return {
    type: Types.SYNC_HISTORY,
    payload: params,
  };
}
function syncHitsorySuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_SYNC_HISTORY,
    payload: data,
  };
}
function syncHistoryError(error) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_SYNC_HISTORY,
    payload: error,
  };
}

export const syncHistoryActions = {
  syncHistory,
  syncHitsorySuccess,
  syncHistoryError,
};
