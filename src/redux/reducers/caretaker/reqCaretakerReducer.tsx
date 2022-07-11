import Types from '../../actions/allTypes';

let initialState = {
  load: true,
  datastate: [],
};

const reqCaretakerReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCESS_CARETAKER_REQUEST:
      return {
        load: false,
        datastate: payload.datastate,
      };
    case Types.FAILED_CARETAKER_REQUEST:
      return {
        ...state,
       datastate: [],
      };
    default:
      return state;
  }
};

export default reqCaretakerReducer;