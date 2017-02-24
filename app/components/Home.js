/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';

import { FloatingActionButton } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs } from '../actions';

class Home extends Component {
    render() {
      const { width, height } = Dimensions.get('window');
      const useWidth = width < height ? width : height;
      const useHeight = width < height ? height : width;
      return (
        <View
          style={{ flex: 1, backgroundColor: '#000000' }}
        >
            <View>
              <Image
                source={require('../assets/images/mob-bg-bw.png')}
                resizeMode='stretch'
                style={{ width: useWidth, height: useHeight }}
              />
            </View>

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

  const mapStateToProps = ({ home }) => {
    const { error, loading } = home;
    return { error, loading };
  };

  export default connect(mapStateToProps, { onPressContact,
                                            onPressWatch,
                                            onPressListen,
                                            onPressGigs })(Home);
