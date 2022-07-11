import Types from "../allTypes";

function fetchPatientReq(user_id: string) {
  return {
    type: Types.GET_PATIENT_REQUEST,
    payload: user_id,
  };
}
function fetchPatientReqSuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCES_PATIENT_REQUEST,
    payload: data,
  };
}
function fetchPatientReqError(error) {
  console.log(error, 'ac');
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
