import {takeLatest, call, put} from 'redux-saga/effects';
import notifypatient from '../../apis/notifypatient';
import { reqCaretakerActions } from '../../actions/caretaker/reqCaretakerActions';
export function* reqCaretakerSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(notifypatient, payload);
    yield put(reqCaretakerActions.sendReqCaretakerSuccess(response?.data));
  } catch (err) {
    yield put(reqCaretakerActions.sendReqCaretakerFailed(err));
  }
}
export function* reqCaretakerwatcherSaga() {
  yield takeLatest(reqCaretakerActions.sendReqCaretaker, reqCaretakerSaga);
}