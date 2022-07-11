import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { notifyPatients, notifyPatientsError, notifyPatientsSuccess } from '../../actions/patient/notifyPatientActions';
import notifypatient from '../../apis/notifypatient';



function* notifyPatient({payload}) {
  try {
    const data = yield call(notifypatient, payload);
    console.log(data, 'called');
    yield put(notifyPatientsSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(notifyPatientsError(err));
  }
}

export default function* notifyPatientSaga() {
  yield takeEvery(Types.NOTIFY_PATIENT, notifyPatient);
}
