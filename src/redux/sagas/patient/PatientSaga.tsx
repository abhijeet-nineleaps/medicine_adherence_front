import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { fetchPatientError, fetchPatientSuccess } from '../../actions/patient/PatientActions';
import fetchPatient from '../../apis/fetchPatient';

function* getpatient({payload}) {
  try {
    const data = yield call(fetchPatient, payload);
    console.log(data, 'called');
    yield put(fetchPatientSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(fetchPatientError(err));
  }
}

export default function* PatientSaga() {
  yield takeEvery(Types.GET_PATIENT, getpatient);
}
