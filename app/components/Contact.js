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
  ScrollView,
  Linking,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FloatingActionButton } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs } from '../actions';

class Contact extends Component {

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
          <ScrollView>
            <View style={{ flex: 1 }} >
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => Linking.openURL('mailto:info@rhinoplasty-band.co.uk')}
              >
                <MCIcon name="email" style={styles.iconStyle} />
                <Text style={styles.homeText}>
                  info@rhinoplasty-band.co.uk
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => Linking.openURL('https://www.facebook.com/rhinoplastyband/')}
              >
                <MCIcon name="facebook-box" style={styles.iconStyle} />
                <Text style={styles.homeText}>
                  @rhinoplastyband
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => Linking.openURL('https://www.youtube.com/channel/UCjuzw9t4CKELqCOJeRg4nSQ')}
              >
                <MCIcon name="youtube-play" style={styles.iconStyle} />
                <Text style={styles.homeText}>
                  RhinoPlasty
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => Linking.openURL('https://soundcloud.com/rhinoplasty-uk')}
              >
                <MCIcon name="soundcloud" style={styles.iconStyle} />
                <Text style={styles.homeText}>
                  RhinoPlasty
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => Linking.openURL('http://rhinoplasty-band.co.uk/')}
              >
                <MCIcon name="web" style={styles.iconStyle} />
                <Text style={styles.homeText}>
                  rhinoplasty-band.co.uk
                </Text>
              </TouchableOpacity>
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
      fontSize: 14,
      fontWeight: 'bold',
      color: '#5A5A5A',
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10
    },
    iconStyle: {
      fontSize: 40,
      height: 40,
      color: '#2C3E50',
      margin: 10
    }
  });

export default connect(null, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs })(Contact);
