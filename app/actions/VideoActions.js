import {
  VIDEO_FETCH_SUCCESS,
  FIREBASE_UNMOUNT_VIDEOS
} from './types';

export const videosFetch = (firestack) => {
  //console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/videos')
      .on('value', snapshot => {
        dispatch({ type: VIDEO_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const unmountFirebaseVideos = (firestack) => {
  //console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/videos').off();
    dispatch({ type: FIREBASE_UNMOUNT_VIDEOS });
  };
};
