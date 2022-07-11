import {call, put, takeEvery} from 'redux-saga/effects';
import { syncMedsError, syncMedSuccess } from '../../actions/adherence/syncMedActions';
import Types from '../../actions/allTypes';
import syncmeds from '../../apis/syncmeds';

function* syncMed({payload}) {
  try {
    const data = yield call(syncmeds, payload);
    console.log(data, 'called');
    yield put(syncMedSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');

    yield put(syncMedsError(err));
  }
}

export default function* syncMedSaga() {
  yield takeEvery(Types.SYNC_MEDS, syncMed);
}
