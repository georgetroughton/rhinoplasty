import {
  VIDEO_FETCH_SUCCESS
} from './types';

export const videosFetch = (firestack) => {
  console.log(firestack.database);
  return (dispatch) => {
    firestack.database.ref('/videos')
      .on('value', snapshot => {
        dispatch({ type: VIDEO_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
