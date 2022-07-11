import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { fetchPatientReqError, fetchPatientReqSuccess } from '../../actions/patient/patientReqActions';
import fetchpatientreq from '../../apis/fetchpatientreq';


function* getPatientReq({payload}) {
  try {
    const data = yield call(fetchpatientreq, payload);
    console.log(data, 'called');
    yield put(fetchPatientReqSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(fetchPatientReqError(err));
  }
}

export default function* patientReqSaga() {
  yield takeEvery(Types.GET_PATIENT_REQUEST, getPatientReq);
}
