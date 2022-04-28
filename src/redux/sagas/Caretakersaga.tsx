import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/Alltypes';
import {fetchCaretakerserror} from '../actions/CaretakerTakerActions';
import fetchcaretaker from '../apis/GetCaretaker';

function* getcaretaker({payload}) {
  try {
    const data = yield call(fetchcaretaker, payload);
    console.log(data, 'called');
    if (data.status === 'Success') {
      yield put({type: Types.Success_CareTAKER_REQUEST, payload: data});
    } else {
        console.log({type: Types.Failed_CareTAKER_REQUEST, payload: data});

      yield put({type: Types.Failed_CareTAKER_REQUEST, payload: data});
    }
  } catch (err) {
    console.log(err, 'sagg');
    // yield put(fetchCaretakerserror(err));
  }
}

export default function* caretakerSaga() {
  yield takeEvery(Types.GET_CARETAKERS, getcaretaker);

}
