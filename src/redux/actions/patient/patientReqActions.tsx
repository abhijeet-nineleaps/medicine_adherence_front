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
function fetchPatientReq(user_id: string) {
  return {
    type: Types.GET_PATIENT_REQUEST,
    payload: user_id,
  };
}
function fetchPatientReqSuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCES_PATIENT_REQUEST,
    payload: data,
  };
}
function fetchPatientReqError(error) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_PATIENT_REQUEST,
    payload: error,
  };
}

export const patientReqActions = {
  fetchPatientReq,
  fetchPatientReqSuccess,
  fetchPatientReqError,
}
        