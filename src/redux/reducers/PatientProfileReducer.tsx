import Types from '../actions/allTypes';

let initialState = {
  load: true,
  patientDetails: [],
};

const PatientProfileReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCES_PATIENT_DETAILS:
      return {
        load: false,
        patientDetails: payload.patientDetails,
      };
    case Types.FAILED_PATIENT_DETAILS:
      return {
        ...state,
        patientDetails: [],
      };
    default:
      return state;
  }
};

export default PatientProfileReducer;
