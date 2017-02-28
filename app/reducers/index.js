import { combineReducers } from 'redux';

import HomeReducer from './HomeReducer';
import VideoReducer from './VideoReducer';
import GigReducer from './GigReducer';
import TrackReducer from './TrackReducer';

export default combineReducers({
  home: HomeReducer,
  videos: VideoReducer,
  gigs: GigReducer,
  tracks: TrackReducer
});
