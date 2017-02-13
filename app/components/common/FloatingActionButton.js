/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import { ActionButton } from 'react-native-material-ui';

class FloatingActionButton extends Component {

    render() {
      return (
        <View>
          <ActionButton
            actions={['email', { icon: 'phone', label: 'Phone' }, 'sms', 'favorite']}
            icon="share"
            transition="speedDial"
          />
        </View>
      );
    }

  }

  const styles = StyleSheet.create({
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white'
    },
    homeText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#5A5A5A',
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10
    },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'transparent',
    },
    blurContainer: {
      paddingHorizontal: 20,
    }
  });

export { FloatingActionButton };
