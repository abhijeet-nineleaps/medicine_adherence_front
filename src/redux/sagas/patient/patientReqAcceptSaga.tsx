import {takeLatest, call, put} from 'redux-saga/effects';
import { patientReqAcceptActions } from '../../actions/patient/patientReqAcceptActions';
import fetchpatientreqaccept from '../../apis/fetchpatientreqaccept';
export function* reqAcceptSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(fetchpatientreqaccept, payload);
    yield put(patientReqAcceptActions.acceptPatientReqSuccess(response?.data));
  } catch (err) {
    yield put(patientReqAcceptActions.acceptPatientReqError(err));
  }
}
export function* reqAcceptwatcherSaga() {
  yield takeLatest(patientReqAcceptActions.acceptPatientReq, reqAcceptSaga);
}