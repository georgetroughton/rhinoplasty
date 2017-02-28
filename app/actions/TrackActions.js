import {
  TRACK_FETCH_SUCCESS,
  FIREBASE_UNMOUNT_TRACKS
} from './types';

export const tracksFetch = (firestack) => {
  //console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/tracks').orderByKey()
      .on('value', snapshot => {
        dispatch({ type: TRACK_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const unmountFirebaseTracks = (firestack) => {
  //console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/tracks').off();
    dispatch({ type: FIREBASE_UNMOUNT_TRACKS });
  };
};
