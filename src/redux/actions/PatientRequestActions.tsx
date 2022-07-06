import Types from "./AllTypes";

export function fetchPatientRequest(user_id: String) {
  return {
    type: Types.GET_PATIENT_REQUEST,
    payload: user_id,
  };
}
export function fetchPatientRequestSuccess(data) {
  return {
    type: Types.SUCCES_PATIENT_REQUEST,
    payload: data,
  };
}
export function fetchPatientRequestError(error) {
  return {
    type: Types.FAILED_PATIENT_REQUEST,
    payload: error,
  };
}
