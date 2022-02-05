import { takeEvery } from 'redux-saga/effects';
import { SEARCH_PHOTO, GET_PHOTO_DETAILS } from '../constants';
import {
  
} from './photosSaga';

function* rootSaga() {
  [
    yield takeEvery(SEARCH_PHOTO, searchPhotoService),
    yield takeEvery(GET_PHOTO_DETAILS, getPhotoDetailsService),
  ];
}
export default rootSaga;
