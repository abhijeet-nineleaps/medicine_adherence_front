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

function fetchMedImages(user_id: string) {
  return {
    type: Types.GET_MED_IMAGES,
    payload: user_id,
  };
}
function fetchMedImagesSuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_MED_IMAGES,
    payload: data,
  };
}
function fetchMedImagesError(error) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_MED_IMAGES,
    payload: error,
  };
}

export const medImagesActions = {
  fetchMedImages,
  fetchMedImagesSuccess,
  fetchMedImagesError,
};
