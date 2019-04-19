import { combineReducers } from 'redux';

const ImageUrlReducer = (image = {
  'imageUrl': ''
}, action) => {
  if (action.type === 'IMAGE_STATUS'){
    return {...image, imageUrl: action.payload.imageUrl };
  }
  return image;
}
const ImageInfoReducer = (image = {
  'width': '',
  'height': ''
}, action) => {
  if (action.type === 'IMAGE_CHANGE_STATUS'){
    return { ...image, imageUrl: image.imageUrl, width: action.payload.width, height: action.payload.height };
  }
  return image;
}

const ShowInfoStateReducer = (state = false, action) => {
  if (action.type === "SHOW_INFO_STATE"){
    return action.payload;
  } 
  return state
}

export default combineReducers({
  ImageUrlReducer: ImageUrlReducer,
  ImageInfoReducer: ImageInfoReducer,
  ShowInfoStateReducer: ShowInfoStateReducer
})