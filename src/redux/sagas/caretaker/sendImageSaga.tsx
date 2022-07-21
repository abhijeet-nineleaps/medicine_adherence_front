import {takeLatest, call, put} from 'redux-saga/effects';
import notifypatient from '../../apis/notifypatient';
import { sendImageActions } from '../../actions/caretaker/sendImageActions';
export function* sendImageSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(notifypatient, payload);
    yield put(sendImageActions.sendImageSuccess(response?.data));
  } catch (err) {
    yield put(sendImageActions.sendImageFailed(err));
  }
}
export function* sendImagewatcherSaga() {
  yield takeLatest(sendImageActions.sendImageRequest, sendImageSaga);
}