import Types from '../../actions/allTypes';

let initialState = {
  load: true,
  userDetails: [],
};

const ProfileReducer = (state = initialState, {type, payload}) => {   //NOSONAR false positive
  switch (type) {
    case Types.SUCCESS_PROFILE:
      return {
        load: false,
        userDetails: payload.userDetails,
      };
    case Types.FAILED_PROFILE:
      return {
        ...state,
        userDetails: [],
      };
    default:
      return state;
  }
};

export default ProfileReducer;
