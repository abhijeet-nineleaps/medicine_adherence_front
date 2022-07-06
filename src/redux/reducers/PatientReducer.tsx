import Types from '../actions/AllTypes';

let initialState = {
  load: true,
  patientList: [],
};

const PatientReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case Types.SUCCES_PATIENT:
      return {
        load: false,
        patientList: payload.patientList,
      };
    case Types.FAILED_PATIENT:
      return {
        ...state,
        patientList: [],
      };
    default:
      return state;
  }
};

export default PatientReducer;
