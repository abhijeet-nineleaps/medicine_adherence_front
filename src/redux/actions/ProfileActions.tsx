import Types from "./AllTypes";

export function putProfile(user_id: String) {
  return {
    type: Types.PUT_PROFILE,
    payload: user_id,
  };
}
export function putProfileSuccess(data) {
  return {
    type: Types.SUCCES_PROFILE,
    payload: data,
  };
}
export function putProfileFailed(error) {
  return {
    type: Types.FAILED_PROFILE,
    payload: error,
  };
}
