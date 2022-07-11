import Types from '../allTypes';

function syncMeds(user_id: string) {
  return {
    type: Types.SYNC_MEDS,
    payload: user_id
  };
}
 function syncMedSuccess(data) {
  console.log(data, 'success');
  return {
    type: Types.SUCCESS_SYNC_MEDS,
    payload: data,
  };
}
function syncMedsError(error) {
  console.log(error, 'ac');
  return {
    type: Types.FAILED_SYNC_MEDS,
    payload: error,
  };
}

export const syncMedActions = {
  syncMeds,
  syncMedSuccess,
  syncMedsError,
}