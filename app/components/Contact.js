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

import { FloatingActionButton } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs } from '../actions';

class Contact extends Component {

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
          <ScrollView>
            <View style={{ flex: 1 }} >
            <Text style={styles.homeText}>
                Facebook
              </Text>
              <Text style={styles.homeText}>
                Email
              </Text>
            </View>
          </ScrollView>

          <FloatingActionButton
            onPressContact={() => { return false; }}
            onPressWatch={this.props.onPressWatch}
            onPressListen={this.props.onPressListen}
            onPressGigs={this.props.onPressGigs}
          />
        </View>
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
                               onPressGigs })(Contact);
