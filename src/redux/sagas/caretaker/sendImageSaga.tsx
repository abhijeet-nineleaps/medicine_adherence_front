import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { sendImageFailed, sendImageSuccess } from '../../actions/caretaker/sendImageActions';
import sendimages from '../../apis/sendimages';


function* sendImage({payload}) {
  try {
    const data = yield call(sendimages,payload);
    console.log(data, 'called');
    yield put(sendImageSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(sendImageFailed(err));
  }
}

export default function* sendImageSaga() {
  yield takeEvery(Types.SEND_IMAGES, sendImage);
}
