import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../../actions/allTypes';
import { sendReqCaretakerFailed, sendReqCaretakerSuccess } from '../../actions/caretaker/reqCaretakerActions';
import reqcaretaker from '../../apis/reqcaretaker';

function* reqCaretaker({payload}) {
  try {
    const data = yield call(reqcaretaker,payload);
    console.log(data, 'called');
    yield put(sendReqCaretakerSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(sendReqCaretakerFailed(err));
  }
}

export default function* reqCaretakerSaga() {
  yield takeEvery(Types.SEND_CARETAKER_REQUEST, reqCaretaker);
}
