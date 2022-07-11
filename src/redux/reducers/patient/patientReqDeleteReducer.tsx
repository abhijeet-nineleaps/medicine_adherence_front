import Types from '../../actions/allTypes';

let initialState = {
  load: true,
 patientReqList: [],
};

const patientReqDeleteReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCES_DELETE_PATIENT_REQUEST:
      return {
        load: false,
        patientReqList: payload.patientReqList,
      };
    case Types.FAILED_DELETE_PATIENT_REQUEST:
      return {
        ...state,
        patientReqList: [],
      };
    default:
      return state;
  }
};

export default patientReqDeleteReducer;