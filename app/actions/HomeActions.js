import { Actions } from 'react-native-router-flux';

import {
  CONTACT_PRESSED,
  WATCH_PRESSED,
  LISTEN_PRESSED,
  GIGS_PRESSED
} from './types';

export const onPressContact = () => {
  Actions.contact({ type: 'replace' });
  return {
    type: CONTACT_PRESSED
  };
};

export const onPressWatch = () => {
  Actions.watch({ type: 'replace' });
  return {
    type: WATCH_PRESSED
  };
};

export const onPressListen = () => {
  Actions.listen({ type: 'replace' });
  return {
    type: LISTEN_PRESSED
  };
};

export const onPressGigs = () => {
  Actions.gigs({ type: 'replace' });
  return {
    type: GIGS_PRESSED
  };
};
