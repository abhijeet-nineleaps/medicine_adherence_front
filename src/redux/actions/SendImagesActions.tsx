import Types from './AllTypes';

export function sendImageRequest(medId: Number) {
  return {
    type: Types.SEND_IMAGES,
    payload: medId,
  };
}

export function sendImageSuccess(data) {
  return{
    typpe: Types.SUCCES_SEND_IMAGES,
    payload: data,
  };
}

export function sendImageFailure(error) {
  return{
    type: Types.FAILED_SEND_IMAGES,
    payload: error,
  }
}
