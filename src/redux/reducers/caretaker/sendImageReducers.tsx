import Types from '../../actions/allTypes';

let initialState = {
  load: true,
  datastate: [],
};

const sendImagesReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCESS_SEND_IMAGES:
      return {
        load: false,
        datastate: payload.datastate,
      };
    case Types.FAILED_SEND_IMAGES:
      return {
        ...state,
       datastate: [],
      };
    default:
      return state;
  }
};

export default sendImagesReducer;