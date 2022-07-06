import Types from "./AllTypes";

export function fetchPatients(user_id: String) {
  return {
    type: Types.GET_PATIENT,
    payload: user_id,
  };
}
export function fetchPatientSuccess(data) {
  return {
    type: Types.SUCCES_PATIENT,
    payload: data,
  };
}
export function fetchPatientError(error) {
  return {
    type: Types.FAILED_PATIENT,
    payload: error,
  };
}