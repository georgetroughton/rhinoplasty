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

import { FloatingActionButton } from './common';

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

          <FloatingActionButton onPressContact={() => { return false; }} />
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

export default Contact;
