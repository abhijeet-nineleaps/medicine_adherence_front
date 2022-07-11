import Types from '../../actions/allTypes';

let initialState = {
  load: true,
  datastate: [],
};

const emailCaretakerReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCESS_SEND_EMAIL:
      return {
        load: false,
        datastate: payload.datastate,
      };
    case Types.FAILED_SEND_EMAIL:
      return {
        ...state,
       datastate: [],
      };
    default:
      return state;
  }
};

export default emailCaretakerReducer;