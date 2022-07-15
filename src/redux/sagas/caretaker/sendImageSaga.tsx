import {call, put, takeEvery} from 'redux-saga/effects';
import { logger } from 'react-native-logs';
import Types from '../../actions/allTypes';
import { sendImageFailed, sendImageSuccess } from '../../actions/caretaker/sendImageActions';
import sendimages from '../../apis/sendimages';

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
function* sendImage({payload}) {
  try {
    const data = yield call(sendimages,payload);
    log.info(data, 'called');
    yield put(sendImageSuccess(data));
  } catch (err) {
    log.error(err, 'sagg');

    yield put(sendImageFailed(err));
  }
}

export default function* sendImageSaga() {
  yield takeEvery(Types.SEND_IMAGES, sendImage);
}
