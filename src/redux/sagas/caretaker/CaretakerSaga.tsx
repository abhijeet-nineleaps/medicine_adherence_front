import {takeLatest, call, put} from 'redux-saga/effects';
import notifypatient from '../../apis/notifypatient';
import { CaretakerActions } from '../../actions/caretaker/CaretakerActions';
export function* caretakerSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(notifypatient, payload);
    yield put(CaretakerActions.fetchCaretakerssuccess(response?.data));
  } catch (err) {
    yield put(CaretakerActions.fetchCaretakerserror(err));
  }
}
export function* caretakerwatcherSaga() {
  yield takeLatest(CaretakerActions.fetchCaretakers, caretakerSaga);
}