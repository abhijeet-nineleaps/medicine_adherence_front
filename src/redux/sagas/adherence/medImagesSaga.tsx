import {takeLatest, call, put} from 'redux-saga/effects';
import notifypatient from '../../apis/notifypatient';
import { medImagesActions } from '../../actions/adherence/medImagesActions';
export function* medImagesSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(notifypatient, payload);
    yield put(medImagesActions.fetchMedImagesSuccess(response?.data));
  } catch (err) {
    yield put(medImagesActions.fetchMedImagesError(err));
  }
}
export function* medImageswatcherSaga() {
  yield takeLatest(medImagesActions.fetchMedImages, medImagesSaga);
}