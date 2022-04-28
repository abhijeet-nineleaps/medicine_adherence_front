import Types from '../actions/Alltypes';

let initialState = {
  load: true,
  userCaretakerList: [],
};

const CareTakerReducer = (state = initialState, {type, payload}) => {
  console.log(payload, type);
  console.log({...state});
  switch (type) {
    case Types.GET_CARETAKERS:
      return {
        load: false,
        userCaretakerList: payload.userCaretakerList,
      };
    case Types.Success_CareTAKER_REQUEST:
      return {
        load: false,
        userCaretakerList: payload.userCaretakerList,
      };
    case Types.Failed_CareTAKER_REQUEST:
      return {
        load: true,
        userCaretakerList: payload.userCaretakerList,

      };
    default:
      return state;
  }
};

export default CareTakerReducer;
