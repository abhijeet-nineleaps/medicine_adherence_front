import Types from '../actions/Alltypes';

let initialState = {
  load: true,
  userCaretakerList: [],
};

const CareTakerReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case Types.Success_CareTAKER_REQUEST:
      return {
        load: false,
        userCaretakerList: payload.userCaretakerList,
      };
    case Types.Failed_CareTAKER_REQUEST:
      return {
        ...state,
        userCaretakerList: [],
      };
    default:
      return state;
  }
};

export default CareTakerReducer;
