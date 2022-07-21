import {takeLatest, call, put} from 'redux-saga/effects';
import notifypatient from '../../apis/notifypatient';
import { notifyPatientActions } from '../../actions/patient/notifyPatientActions';
export function* notifySaga(value) {
  const {payload} = value;
  try {
    const response = yield call(notifypatient, payload);
    yield put(notifyPatientActions.notifyPatientsSuccess(response?.data));
  } catch (err) {
    yield put(notifyPatientActions.notifyPatientsError(err));
  }
}
export function* notifywatcherSaga() {
  yield takeLatest(notifyPatientActions.notifyPatients, notifySaga);
}