import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import {
  fetchCaretakerserror,
  fetchCaretakerssuccess,
} from '../actions/caretakerActions';
import fetchcaretaker from '../apis/getCaretaker';

function* getcaretaker({payload}) {
  try {
    const data = yield call(fetchcaretaker, payload);
    console.log(data, 'called');
    yield put(fetchCaretakerssuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(fetchCaretakerserror(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.GET_CARETAKERS, getcaretaker);
}
