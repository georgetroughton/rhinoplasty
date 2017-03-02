/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import BlurComponent from './BlurComponent';

class FloatingActionButton extends Component {

    render() {
      return (
          <ActionButton
            buttonColor={this.props.bgColor !== 'undefined'
                         ? this.props.bgColor
                         : 'rgba(80,80,80,1)'}
            icon={<Icon name="ios-menu" style={styles.actionButtonIcon} />}
            degrees={180}
            backdrop={
                      <BlurComponent />
                    }
            hideShadow
            backgroundTappable={false}
          >
            <ActionButton.Item
              buttonColor='rgba(0,0,0,1)'
              title="Gigs"
              onPress={this.props.onPressGigs}
              textStyle={styles.actionButtonText}
              textContainerStyle={styles.actionButtonTextContainer}
            >
              <Icon name="md-microphone" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='rgba(0,0,0,1)'
              title="Listen"
              onPress={this.props.onPressListen}
              textStyle={styles.actionButtonText}
              textContainerStyle={styles.actionButtonTextContainer}
            >
              <Icon name="md-musical-notes" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='rgba(0,0,0,1)'
              title="Watch"
              onPress={this.props.onPressWatch}
              textStyle={styles.actionButtonText}
              textContainerStyle={styles.actionButtonTextContainer}
            >
              <Icon name="md-videocam" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='rgba(0,0,0,1)'
              title="Contact"
              onPress={this.props.onPressContact}
              textStyle={styles.actionButtonText}
              textContainerStyle={styles.actionButtonTextContainer}
            >
              <Icon name="md-contact" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
      );
    }

  }

  const styles = {
    actionButtonText: {
      backgroundColor: 'black',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
    },
    actionButtonTextContainer: {
      backgroundColor: 'black',
      borderColor: 'black',
      height: 30
    },
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
      backgroundColor: 'transparent'
    },
    blurContainer: {
      paddingHorizontal: 20,
    }
  };

export { FloatingActionButton };
