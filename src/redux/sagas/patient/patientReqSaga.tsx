import {call, put, takeEvery} from 'redux-saga/effects';
import { logger } from 'react-native-logs';
import Types from '../../actions/allTypes';
import { fetchPatientReqError, fetchPatientReqSuccess } from '../../actions/patient/patientReqActions';
import fetchpatientreq from '../../apis/fetchpatientreq';

const defaultConfig = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  },
  transportOptions: {
    colors: {
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
    },
  },
};
var log = logger.createLogger(defaultConfig);
function* getPatientReq({payload}) {
  try {
    const data = yield call(fetchpatientreq, payload);
    log.info(data, 'called');
    yield put(fetchPatientReqSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(fetchPatientReqError(err));
  }
}

export default function* patientReqSaga() {
  yield takeEvery(Types.GET_PATIENT_REQUEST, getPatientReq);
}
