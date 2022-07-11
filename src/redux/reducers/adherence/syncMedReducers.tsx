import Types from '../../actions/allTypes';

let initialState = {
  load: true,
  userCaretakerList: [],
};

const syncMedReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCESS_SYNC_MEDS:
      return {
        load: false,
        userCaretakerList: payload.userCaretakerList,
      };
    case Types.FAILED_SYNC_MEDS:
      return {
        ...state,
        userCaretakerList: [],
      };
    default:
      return state;
  }
};

export default syncMedReducer;
