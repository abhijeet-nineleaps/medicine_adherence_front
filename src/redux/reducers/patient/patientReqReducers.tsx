import Types from '../../actions/allTypes';

let initialState = {
  load: true,
 patientReqList: [],
};

const patientReqReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCES_PATIENT_DETAILS:
      return {
        load: false,
        patientReqList: payload.patientReqList,
      };
    case Types.FAILED_PATIENT_REQUEST:
      return {
        ...state,
        patientReqList: [],
      };
    default:
      return state;
  }
};

export default patientReqReducer;