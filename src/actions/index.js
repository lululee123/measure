export const ImageState = (status) =>{
  return {
    type: "IMAGE_STATUS",
    payload: status
  }
}

export const ImageChangeState = (status) => {
  return {
    type: "IMAGE_CHANGE_STATUS",
    payload: status
  }
}

export const ShowInfoState = (status) => {
  return {
    type: "SHOW_INFO_STATE",
    payload: status
  }
}