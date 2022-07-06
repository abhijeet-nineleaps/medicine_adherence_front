import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/AllTypes';
import { fetchPatientDetailsError, fetchPatientDetailsSuccess } from '../actions/PatientProfileActions';
import fetchpatientdetail from '../apis/GetPatientDetails';

function* getPatientDetails({payload}) {
  try {
    const data = yield call(fetchpatientdetail, payload);
    console.log(data, 'called');
    yield put(fetchPatientDetailsSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(fetchPatientDetailsError(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.GET_PATIENT_DETAILS, getPatientDetails);
}
