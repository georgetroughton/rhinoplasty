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
import { onPressContact } from '../actions';

class Home extends Component {

    render() {
      const { width } = Dimensions.get('window');
      return (
        <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
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
                live to energetic crowds and rocking on!!!!
              </Text>
              <Text style={styles.homeText}>
                The band covers a collection of the finest rock, soul and blues
                songs from the last 50 years and bringing the "HORN" to all
                that listen.
              </Text>
            </View>
          </ScrollView>

          <FloatingActionButton onPressContact={this.props.onPressContact} />
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

  const mapStateToProps = ({ home }) => {
    const { error, loading } = home;
    return { error, loading };
  };

  export default connect(mapStateToProps, { onPressContact })(Home);
