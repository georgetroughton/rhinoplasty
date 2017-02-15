/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import { FloatingActionButton, BackgroundImage } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs } from '../actions';

class Listen extends Component {

    render() {
      return (
        <BackgroundImage>
          <ScrollView>
            <View style={{ flex: 1 }} >
            <Text style={styles.homeText}>
                Song
              </Text>
              <Text style={styles.homeText}>
                Song
              </Text>
            </View>
          </ScrollView>

          <FloatingActionButton
            onPressContact={this.props.onPressContact}
            onPressWatch={this.props.onPressWatch}
            onPressListen={() => { return false; }}
            onPressGigs={this.props.onPressGigs}
          />
        </BackgroundImage>
      );
    }

  }

  const styles = StyleSheet.create({
    homeText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#5A5A5A',
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10
    }
  });

export default connect(null, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs })(Listen);
