import Types from "../allTypes";

function deletePatientReq(ci_id: string) {
  return {
    type: Types.DELETE_PATIENT_REQUEST,
    payload: ci_id,
  };
}
function deletePatientReqSuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCES_DELETE_PATIENT_REQUEST,
    payload: data,
  };
}
function deletePatientReqError(error) {
  console.log(error, 'ac');
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
