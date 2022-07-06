import Types from "./AllTypes";

export function fetchPatientDetails(user_id: String) {
  return {
    type: Types.GET_PATIENT_DETAILS,
    payload: user_id,
  };
}
export function fetchPatientDetailsSuccess(data) {
  return {
    type: Types.SUCCES_PATIENT_DETAILS,
    payload: data,
  };
}
export function fetchPatientDetailsError(error) {
  return {
    type: Types.FAILED_PATIENT_DETAILS,
    payload: error,
  };
}
