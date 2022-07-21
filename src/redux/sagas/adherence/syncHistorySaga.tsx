import {takeLatest, call, put} from 'redux-saga/effects';
import notifypatient from '../../apis/notifypatient';
import { syncHistoryActions } from '../../actions/adherence/syncHistoryActions';
export function* syncHistorySaga(value) {
  const {payload} = value;
  try {
    const response = yield call(notifypatient, payload);
    yield put(syncHistoryActions.syncHitsorySuccess(response?.data));
  } catch (err) {
    yield put(syncHistoryActions.syncHistoryError(err));
  }
}
export function* syncHistorywatcherSaga() {
  yield takeLatest(syncHistoryActions.syncHistory, syncHistorySaga);
}