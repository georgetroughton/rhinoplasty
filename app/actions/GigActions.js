import {
  GIGS_FETCH_SUCCESS,
  FIREBASE_UNMOUNT_GIGS
} from './types';

export const gigsFetch = (firestack) => {
  //console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/gigs').orderByKey()
      .on('value', snapshot => {
        dispatch({ type: GIGS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const unmountFirebaseGigs = (firestack) => {
  //console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/gigs').off();
    dispatch({ type: FIREBASE_UNMOUNT_GIGS });
  };
};
