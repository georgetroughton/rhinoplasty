import { combineReducers } from 'redux';

import HomeReducer from './HomeReducer';
import VideoReducer from './VideoReducer';

export default combineReducers({
  home: HomeReducer,
  videos: VideoReducer
});
