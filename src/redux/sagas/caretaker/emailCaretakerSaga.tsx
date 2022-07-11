import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { sendEmailSuccess, sendEmailFailed } from '../../actions/caretaker/emailCaretakerActions';
import emailcaretaker from '../../apis/emailcaretaker';

function* emailCaretaker({payload}) {
  try {
    const data = yield call(emailcaretaker, payload);
    console.log(data, 'called');
    yield put(sendEmailSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(sendEmailFailed(err));
  }
}

export default function* emailCaretakerSaga() {
  yield takeEvery(Types.SEND_EMAIL, emailCaretaker);
}
