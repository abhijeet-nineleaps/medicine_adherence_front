import {takeLatest, call, put} from 'redux-saga/effects';
import { patientReqDeleteActions } from '../../actions/patient/patientReqDeleteActions';
import fetchpatientreqdelete from '../../apis/fetchpatientreqdelete';
export function* reqDeleteSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(fetchpatientreqdelete, payload);
    yield put(patientReqDeleteActions.deletePatientReqSuccess(response?.data));
  } catch (err) {
    yield put(patientReqDeleteActions.deletePatientReqError(err));
  }
}
export function* reqDeletewatcherSaga() {
  yield takeLatest(patientReqDeleteActions.deletePatientReq, reqDeleteSaga);
}