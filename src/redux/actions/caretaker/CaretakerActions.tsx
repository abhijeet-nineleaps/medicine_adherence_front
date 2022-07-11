import Types from '../allTypes';

function fetchCaretakers(medId: string) {
  return {
    type: Types.GET_CARETAKERS,
    payload: medId,
  };
}
function fetchCaretakerssuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.Success_CareTAKER_REQUEST,
    payload: data,
  };
}
function fetchCaretakerserror(error) {
  console.log(error, 'ac');
  return {
    type: Types.Failed_CareTAKER_REQUEST,
    payload: error,
  };
}

export const CaretakerActions = {
  fetchCaretakers,
  fetchCaretakerssuccess,
  fetchCaretakerserror
}