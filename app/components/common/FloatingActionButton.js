/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from 'react-native-blur';

class FloatingActionButton extends Component {

    render() {
      const { width, height } = Dimensions.get('window');

      return (
        <View>
          <ActionButton
            buttonColor="rgba(0,0,0,0.3)"
            icon={<Icon name="ios-menu" style={styles.actionButtonIcon} />}
            degrees={0}
            backdrop={
                      <BlurView
                        blurType="xlight"
                        blurAmount={2}
                        style={{ width, height }}
                      />
                    }
          >
            <ActionButton.Item
              buttonColor='#000000'
              title="Gigs"
              onPress={this.props.onPressGigs}
              titleColor="#ffffff"
              titleBgColor="#000000"
            >
              <Icon name="md-microphone" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#000000'
              title="Listen"
              onPress={this.props.onPressListen}
              titleColor="#ffffff"
              titleBgColor="#000000"
            >
              <Icon name="md-musical-notes" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#000000'
              title="Watch"
              onPress={this.props.onPressWatch}
              titleColor="#ffffff"
              titleBgColor="#000000"
            >
              <Icon name="md-videocam" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item
              buttonColor='#000000'
              title="Contact"
              onPress={this.props.onPressContact}
              titleColor="#ffffff"
              titleBgColor="#000000"
            >
              <Icon name="md-contact" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
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
