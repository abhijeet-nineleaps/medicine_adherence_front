import Types from './allTypes';

export function fetchCaretakers(user_id: String) {
  return {
    type: Types.GET_CARETAKERS,
    payload: user_id,
  };
}
export function fetchCaretakerssuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.Success_CareTAKER_REQUEST,
    payload: data,
  };
}
export function fetchCaretakerserror(error) {
  console.log(error, 'ac');
  return {
    type: Types.Failed_CareTAKER_REQUEST,
    payload: error,
  };
}
