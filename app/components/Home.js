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

import { FloatingActionButton, BackgroundImage } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs } from '../actions';

class Home extends Component {

    render() {
      const { width } = Dimensions.get('window');
      return (
        <BackgroundImage>
          <ScrollView>
            <View style={{ flex: 1 }} >
              <Image
                source={require('../assets/images/logo.png')}
                resizeMode='contain'
                style={{ width: width - 20, marginLeft: 10, marginRight: 10 }}
              />
              <Text style={styles.homeText}>
                RhinoPlasty is made up of 6 seasoned musicians who all have
                a passion for having fun, who enjoy the thrill of playing
                live to energetic crowds and rocking on!!!!{'\n\n'}
                The band covers a collection of the finest rock, soul and blues
                songs from the last 50 years and bringing the "HORN" to all
                that listen.
              </Text>
            </View>
          </ScrollView>

          <FloatingActionButton
            onPressContact={this.props.onPressContact}
            onPressWatch={this.props.onPressWatch}
            onPressListen={this.props.onPressListen}
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
      color: '#ffffff',
      marginBottom: 10,
      marginRight: 10,
      marginLeft: 10,
      padding: 5,
      backgroundColor: 'rgba(1,1,1,0.2)'
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
