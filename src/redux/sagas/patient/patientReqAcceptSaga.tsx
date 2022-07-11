import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { acceptPatientReqError, acceptPatientReqSuccess } from '../../actions/patient/patientReqAcceptActions';
import fetchpatientreqaccept from '../../apis/fetchpatientreqaccept';


function* getPatientReqAccept({payload}) {
  try {
    const data = yield call(fetchpatientreqaccept, payload);
    console.log(data, 'called');
    yield put(acceptPatientReqSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(acceptPatientReqError(err));
  }
}

export default function* patientReqAcceptSaga() {
  yield takeEvery(Types.ACCEPT_PATIENT_REQUEST, getPatientReqAccept);
}
