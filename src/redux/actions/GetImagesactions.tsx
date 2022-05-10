import Types from './Alltypes';

export function sendImageRequest(medId: Number) {
  return {
    type: Types.GET_IMAGES,
    payload: medId,
  };
}

export function sendImageSuccess() {}

export function sendImageFailure() {}
