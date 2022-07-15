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
function deletePatientReq(ci_id: string) {
  return {
    type: Types.DELETE_PATIENT_REQUEST,
    payload: ci_id,
  };
}
function deletePatientReqSuccess(data) {
  log.info(data, 'success');
  return {
    type: Types.SUCCES_DELETE_PATIENT_REQUEST,
    payload: data,
  };
}
function deletePatientReqError(error) {
  log.error(error, 'ac');
  return {
    type: Types.FAILED_DELETE_PATIENT_REQUEST,
    payload: error,
  };
}

export const patientReqDeleteActions = {
  deletePatientReq,
  deletePatientReqSuccess,
  deletePatientReqError,
}
