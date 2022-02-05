import {put, call} from 'redux-saga/effects';
import {
  searchPhotoSuccess,
  getPhotoDetailsSuccess,
} from '../actions/photos';
import axios from 'axios'

export function* searchPhotoService(action) {
  try {
    const data = yield call(
      axios.get,
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=dbd97ac03b656fc720518847fe799121&text=${action.payload}&format=json&nojsoncallback=1&api_sig=12b7eac4aa3fd3ed0d2a690d2b2e3ef3`,
    );
    if (data.photos) {
      yield put(searchPhotoSuccess(data.photos.photo));
      yield put();
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getPhotoDetailsService(action) {
    try {
      const data = yield call(
        axios.get,
        `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=dbd97ac03b656fc720518847fe799121&photo_id=${action.payload}&format=json&nojsoncallback=1&api_sig=cbf1d98d029054e943103e51f81ef2e2`,
      );
      if (data.stat === 'ok') {
        yield put(getPhotoDetailsSuccess(data));
      }
    } catch (error) {
      console.log(error);
    }
  }

