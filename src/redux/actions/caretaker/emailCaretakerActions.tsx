import Types from '../allTypes';

function sendEmail(email: any) {
  return {
    type: Types.SEND_EMAIL,
    payload: email,
  };
}
function sendEmailSuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_SEND_EMAIL,
    payload: data,
  };
}
function sendEmailFailed(error) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_SEND_EMAIL,
    payload: error,
  };
}

export const emailCaretakerActions = {
  sendEmail,
  sendEmailSuccess,
  sendEmailFailed,
}