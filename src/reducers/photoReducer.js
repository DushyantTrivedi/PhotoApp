import { GET_PHOTO_DETAILS, SEARCH_PHOTO, GET_PHOTO_DETAILS_SUCCESS } from '../constants';

const initialState = {
  photos: [],
  photoDetails: {},
};

const photoReducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_PHOTO:
      return {
        ...state,
      };
    case SEARCH_PHOTO_SUCCESS:
      return {
        ...state,
        photos: action.payload,
      };
    case GET_PHOTO_DETAILS:
      return {
        ...state,
      };
    case GET_PHOTO_DETAILS_SUCCESS:
      return {
        ...state,
        photoDetails: action.payload,
      };
    default:
      return state;
    }
}

export default photoReducer;