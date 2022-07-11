import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { deletePatientReqError, deletePatientReqSuccess } from '../../actions/patient/patientReqDeleteActions';
import fetchpatientreqdelete from '../../apis/fetchpatientreqdelete';


function* getPatientReqDelete({payload}) {
  try {
    const data = yield call(fetchpatientreqdelete, payload);
    console.log(data, 'called');
    yield put(deletePatientReqSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(deletePatientReqError(err));
  }
}

export default function* patientReqDeleteSaga() {
  yield takeEvery(Types.DELETE_PATIENT_REQUEST, getPatientReqDelete);
}
