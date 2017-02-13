import {
  CONTACT_PRESSED
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTACT_PRESSED:
      return { ...state };
    default:
      return state;
  }
};
