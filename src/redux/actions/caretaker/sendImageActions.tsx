import Types from '../allTypes';

function sendImageRequest(medId: number) {
  return {
    type: Types.SEND_IMAGES,
    payload: medId,
  };
}

function sendImageSuccess(data) {
  return{
    typpe: Types.SUCCESS_SEND_IMAGES,
    payload: data,
  };
}

function sendImageFailed(error) {
  return{
    type: Types.FAILED_SEND_IMAGES,
    payload: error,
  }
}

export const sendImageActions = {
  sendImageFailed,
  sendImageSuccess,
  sendImageRequest,
}
