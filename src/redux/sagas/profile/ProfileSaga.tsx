import {takeLatest, call, put} from 'redux-saga/effects';
import { ProfileActions } from '../../actions/profile/ProfileActions';
import saveprofile from '../../apis/saveProfile'
export function* profileSaga(value) {
  const {payload} = value;
  try {
    const response = yield call(saveprofile, payload);
    yield put(ProfileActions.saveProfileSuccess(response?.data));
  } catch (err) {
    yield put(ProfileActions.saveProfileFailed(err));
  }
}
export function*profilewatcherSaga() {
  yield takeLatest(ProfileActions.saveProfile, profileSaga);
}
