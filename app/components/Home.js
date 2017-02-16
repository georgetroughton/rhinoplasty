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
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';

import { FloatingActionButton } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs } from '../actions';

class Home extends Component {

    render() {
      const { width } = Dimensions.get('window');
      return (
        <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
          <ScrollView>
            <View>
              <Image
                source={require('../assets/images/logo.png')}
                resizeMode='contain'
                style={{ width: width - 20, marginLeft: 10, marginRight: 10 }}
              />
              <View style={styles.homeTextView}>
                <Text style={styles.homeText}>
                  RhinoPlasty is made up of 6 seasoned musicians who all have
                  a passion for having fun, who enjoy the thrill of playing
                  live to energetic crowds and rocking on!!!!{'\n\n'}
                  The band covers a collection of the finest rock, soul and blues
                  songs from the last 50 years and bringing the "HORN" to all
                  that listen.
                </Text>
              </View>
            </View>
          </ScrollView>

          <FloatingActionButton
            onPressContact={this.props.onPressContact}
            onPressWatch={this.props.onPressWatch}
            onPressListen={this.props.onPressListen}
            onPressGigs={this.props.onPressGigs}
          />
        </View>
      );
    }

  }

  const styles = StyleSheet.create({
    homeTextView: {
      margin: 10,
      padding: 5,
      backgroundColor: 'rgba(1,1,1,0.2)',
      borderRadius: 5
    },
    homeText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2C3E50',
      margin: 10,
      padding: 5
    }
  });

  const mapStateToProps = ({ home }) => {
    const { error, loading } = home;
    return { error, loading };
  };

  export default connect(mapStateToProps, { onPressContact,
                                            onPressWatch,
                                            onPressListen,
                                            onPressGigs })(Home);
