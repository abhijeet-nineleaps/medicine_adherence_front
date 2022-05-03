import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/Alltypes';
import {
  fetchCaretakerserror,
  fetchCaretakerssuccess,
} from '../actions/CaretakerTakerActions';
import fetchcaretaker from '../apis/GetCaretaker';

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
