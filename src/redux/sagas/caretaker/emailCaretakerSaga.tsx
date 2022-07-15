import {call, put, takeEvery} from 'redux-saga/effects';
import { logger } from 'react-native-logs';
import Types from '../../actions/allTypes';
import { sendEmailSuccess, sendEmailFailed } from '../../actions/caretaker/emailCaretakerActions';
import emailcaretaker from '../../apis/emailcaretaker';
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
function* emailCaretaker({payload}) {
  try {
    const data = yield call(emailcaretaker, payload);
    log.info(data, 'called');
    yield put(sendEmailSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(sendEmailFailed(err));
  }
}

export default function* emailCaretakerSaga() {
  yield takeEvery(Types.SEND_EMAIL, emailCaretaker);
}
