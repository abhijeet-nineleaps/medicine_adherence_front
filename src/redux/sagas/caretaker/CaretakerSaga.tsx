import {call, put, takeEvery} from 'redux-saga/effects';
import { logger } from 'react-native-logs';
import Types from '../../actions/allTypes';
import {
  fetchCaretakerserror,
  fetchCaretakerssuccess,
} from '../../actions/caretaker/CaretakerActions';
import fetchcaretaker from '../../apis/fetchcaretaker';
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
function* getcaretaker({payload}) {
  try {
    const data = yield call(fetchcaretaker, payload);
    log.info(data, 'called');
    yield put(fetchCaretakerssuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(fetchCaretakerserror(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.GET_CARETAKERS, getcaretaker);
}
