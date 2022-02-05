import { SEARCH_PHOTO, GET_PHOTO_DETAILS, SEARCH_PHOTO_SUCCESS, GET_PHOTO_DETAILS_SUCCESS } from '../constants';

export function searchPhoto(searchText) {
  return {
    type: SEARCH_PHOTO,
    payload: searchText
  };
};

export function searchPhotoSuccess(data) {
  return {
    type: SEARCH_PHOTO_SUCCESS,
    payload: data
  };
}

export function getPhotoDetails(data) {
  return {
    type: GET_PHOTO_DETAILS,
    payload: data
  };
}

export function getPhotoDetailsSuccess(data) {
  return {
    type: GET_PHOTO_DETAILS_SUCCESS,
    payload: data
  };
}