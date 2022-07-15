import {call, put, takeEvery} from 'redux-saga/effects';
import { logger } from 'react-native-logs';
import { syncMedsError, syncMedSuccess } from '../../actions/adherence/syncMedActions';
import Types from '../../actions/allTypes';
import syncmeds from '../../apis/syncmeds';
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
function* syncMed({payload}) {
  try {
    const data = yield call(syncmeds, payload);
    log.info(data, 'called');
    yield put(syncMedSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(syncMedsError(err));
  }
}

export default function* syncMedSaga() {
  yield takeEvery(Types.SYNC_MEDS, syncMed);
}
