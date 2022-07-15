import {call, put, takeEvery} from 'redux-saga/effects';
import {logger} from 'react-native-logs';
import Types from '../../actions/allTypes';
import {
  fetchPatientError,
  fetchPatientSuccess,
} from '../../actions/patient/PatientActions';
import fetchPatient from '../../apis/fetchPatient';
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
function* getpatient({payload}) {
  try {
    const data = yield call(fetchPatient, payload);
    log.info(data, 'called');
    yield put(fetchPatientSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(fetchPatientError(err));
  }
}

export default function* PatientSaga() {
  yield takeEvery(Types.GET_PATIENT, getpatient);
}
