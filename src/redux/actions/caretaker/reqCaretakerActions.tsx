import Types from '../allTypes';

 function sendReqCaretaker(caret_username: string) {
  return {
    type: Types.SEND_CARETAKER_REQUEST,
    payload: caret_username,
  };
}
function sendReqCaretakerSuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_CARETAKER_REQUEST,
    payload: data,
  };
}
function sendReqCaretakerFailed(error) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_CARETAKER_REQUEST,
    payload: error,
  };
}

export const reqCaretakerActions = {
  sendReqCaretaker,
  sendReqCaretakerSuccess,
  sendReqCaretakerFailed,
}