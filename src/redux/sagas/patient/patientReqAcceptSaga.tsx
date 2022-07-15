import {call, put, takeEvery} from 'redux-saga/effects';
import {logger} from 'react-native-logs';
import Types from '../../actions/allTypes';
import {
  acceptPatientReqError,
  acceptPatientReqSuccess,
} from '../../actions/patient/patientReqAcceptActions';
import fetchpatientreqaccept from '../../apis/fetchpatientreqaccept';

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
function* getPatientReqAccept({payload}) {
  try {
    const data = yield call(fetchpatientreqaccept, payload);
    log.info(data, 'called');
    yield put(acceptPatientReqSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(acceptPatientReqError(err));
  }
}

export default function* patientReqAcceptSaga() {
  yield takeEvery(Types.ACCEPT_PATIENT_REQUEST, getPatientReqAccept);
}
