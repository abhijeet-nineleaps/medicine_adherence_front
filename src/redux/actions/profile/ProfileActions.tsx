import Types from "../allTypes";

function saveProfile(user_id: string) {
  return {
    type: Types.SAVE_PROFILE,
    payload: user_id,
  };
}
function saveProfileSuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_PROFILE,
    payload: data,
  };
}
function saveProfileFailed(error) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_PROFILE,
    payload: error,
  };
}

export const ProfileActions = {
  saveProfile,
  saveProfileSuccess,
  saveProfileFailed,
}
