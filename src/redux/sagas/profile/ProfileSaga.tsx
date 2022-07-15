import {call, put, takeEvery} from 'redux-saga/effects';
import {logger} from 'react-native-logs';
import Types from '../../actions/allTypes';
import {
  saveProfileSuccess,
  saveProfileFailed,
} from '../../actions/profile/ProfileActions';
import saveprofile from '../../apis/saveprofile';
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
function* saveDetails({payload}) {
  try {
    const data = yield call(saveprofile, payload);
    log.info(data, 'called');
    yield put(saveProfileSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(saveProfileFailed(err));
  }
}

export default function* ProfileSaga() {
  yield takeEvery(Types.SAVE_PROFILE, saveDetails);
}
