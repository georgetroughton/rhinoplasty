import {
  VENUE_FETCH_SUCCESS,
  FIREBASE_UNMOUNT_VENUES
} from './types';

export const venuesFetch = (firestack) => {
  //console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/venues')
      .on('value', snapshot => {
        dispatch({ type: VENUE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const unmountFirebaseVenues = (firestack) => {
  //console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/venues').off();
    dispatch({ type: FIREBASE_UNMOUNT_VENUES });
  };
};
