import { Actions } from 'react-native-router-flux';

import {
  CONTACT_PRESSED
} from './types';

export const onPressContact = () => {
  Actions.contact();
  return {
    type: CONTACT_PRESSED
  };
};
