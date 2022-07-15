import {call, put, takeEvery} from 'redux-saga/effects';
import { logger } from 'react-native-logs';
import Types from '../../actions/allTypes';
import {notifyPatientsError, notifyPatientsSuccess } from '../../actions/patient/notifyPatientActions';
import notifypatient from '../../apis/notifypatient';


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
function* notifyPatient({payload}) {
  try {
    const data = yield call(notifypatient, payload);
    log.info(data, 'called');
    yield put(notifyPatientsSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(notifyPatientsError(err));
  }
}

export default function* notifyPatientSaga() {
  yield takeEvery(Types.NOTIFY_PATIENT, notifyPatient);
}
