import { combineReducers } from 'redux';

import HomeReducer from './HomeReducer';
import VideoReducer from './VideoReducer';
import GigReducer from './GigReducer';

export default combineReducers({
  home: HomeReducer,
  videos: VideoReducer,
  gigs: GigReducer
});
