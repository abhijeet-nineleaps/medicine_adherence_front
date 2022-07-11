import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { saveProfileSuccess, saveProfileFailed} from '../../actions/profile/ProfileActions';
import saveprofile from '../../apis/saveprofile';

function* saveDetails({payload}) {
  try {
    const data = yield call(saveprofile, payload);
    console.log(data, 'called');
    yield put(saveProfileSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(saveProfileFailed(err));
  }
}

export default function* ProfileSaga() {
  yield takeEvery(Types.SAVE_PROFILE, saveDetails);
}
