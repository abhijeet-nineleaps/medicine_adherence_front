import { logger } from "react-native-logs";
import Types from "../allTypes";
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
function saveProfile(user_id: string) {
  return {
    type: Types.SAVE_PROFILE,
    payload: user_id,
  };
}
function saveProfileSuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCESS_PROFILE,
    payload: data,
  };
}
function saveProfileFailed(error) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_PROFILE,
    payload: error,
  };
}

export const ProfileActions = {
  saveProfile,
  saveProfileSuccess,
  saveProfileFailed,
}
