import Types from '../../actions/allTypes';

let initialState = {
  load: true,
  patientList: [],
};

const notifyPatientReducer = (state = initialState, {type, payload}) => {  //NOSONAR false positive
  switch (type) {
    case Types.SUCCESS_NOTIFY_PATIENT:
      return {
        load: false,
        patientList: payload.patientList,
      };
    case Types.FAILED_NOTIFY_PATIENT:
      return {
        ...state,
        patientList: [],
      };
    default:
      return state;
  }
};

export default notifyPatientReducer;
