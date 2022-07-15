import {call, put, takeEvery} from 'redux-saga/effects';
import {logger} from 'react-native-logs';
import Types from '../../actions/allTypes';
import {
  deletePatientReqError,
  deletePatientReqSuccess,
} from '../../actions/patient/patientReqDeleteActions';
import fetchpatientreqdelete from '../../apis/fetchpatientreqdelete';

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
function* getPatientReqDelete({payload}) {
  try {
    const data = yield call(fetchpatientreqdelete, payload);
    log.info(data, 'called');
    yield put(deletePatientReqSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(deletePatientReqError(err));
  }
}

export default function* patientReqDeleteSaga() {
  yield takeEvery(Types.DELETE_PATIENT_REQUEST, getPatientReqDelete);
}
