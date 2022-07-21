import {takeLatest, call, put} from 'redux-saga/effects';
import notifypatient from '../../apis/notifypatient';
import { downloadPdfActions } from '../../actions/adherence/downloadPdfActions';
export function* downloadPdfSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(notifypatient, payload);
    yield put(downloadPdfActions.downloadPdfSuccess(response?.data));
  } catch (err) {
    yield put(downloadPdfActions.downloadPdfError(err));
  }
}
export function* downloadPdfwatcherSaga() {
  yield takeLatest(downloadPdfActions.downloadPdf, downloadPdfSaga);
}