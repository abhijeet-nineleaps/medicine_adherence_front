import Types from '../actions/allTypes';

let initialState = {
  load: true,
  medImagesList: [],
};

const medImagesReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCESS_MED_IMAGES:
      return {
        load: false,
        medImagesList: payload.medImagesList,
      };
    case Types.FAILED_MED_IMAGES:
      return {
        ...state,
        medImagesList: [],
      };
    default:
      return state;
  }
};

export default medImagesReducer;