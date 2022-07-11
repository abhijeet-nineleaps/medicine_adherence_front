import {call, put, takeEvery} from 'redux-saga/effects';
import Types from '../actions/allTypes';
import { fetchMedImagesError, fetchMedImagesSuccess } from '../actions/adherence/medImagesActions';
import fetchmedimages from '../apis/fetchmedimages';


function* getMedImages({payload}) {
  try {
    const data = yield call(fetchmedimages, payload);
    console.log(data, 'called');
    yield put(fetchMedImagesSuccess(data));
  } catch (err) {
    console.log(err, 'sagg');
    yield put(fetchMedImagesError(err));
  }
}

export default function* medImagesSaga() {
  yield takeEvery(Types.GET_MED_IMAGES, getMedImages);
}
