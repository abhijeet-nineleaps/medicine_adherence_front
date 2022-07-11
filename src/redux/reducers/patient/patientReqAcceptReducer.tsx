import Types from '../../actions/allTypes';

let initialState = {
  load: true,
 patientReqList: [],
};

const patientReqAcceptReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCES_ACCEPT_PATIENT_REQUEST:
      return {
        load: false,
        patientReqList: payload.patientReqList,
      };
    case Types.FAILED_ACCEPT_PATIENT_REQUEST:
      return {
        ...state,
        patientReqList: [],
      };
    default:
      return state;
  }
};

export default patientReqAcceptReducer;