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
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import YouTube from 'react-native-youtube';

import { FloatingActionButton } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs } from '../actions';

class Watch extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isReady: false,
        status: null,
        quality: null,
        error: null,
        isPlaying: true
      };
    }
    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
          <View style={styles.container}>

            <YouTube
              videoId="4Ve0XPoiH74"
              play={this.state.isPlaying}
              hidden={false}
              playsInline
              onReady={() => { this.setState({ isReady: true }); }}
              onChangeState={(e) => { this.setState({ status: e.state }); }}
              onChangeQuality={(e) => { this.setState({ quality: e.quality }); }}
              onError={(e) => { this.setState({ error: e.error }); }}
              style={{ alignSelf: 'stretch',
                       height: 300,
                       backgroundColor: 'black',
                       marginVertical: 10 }}
            />

            <TouchableOpacity
                onPress={() => {
                                  this.setState((s) => {
                                      return { isPlaying: !s.isPlaying };
                                  });
                        }}
            >
              <Text style={[styles.welcome, { color: 'blue' }]}>
                {this.state.status === 'playing' ? 'Pause' : 'Play'}
              </Text>
            </TouchableOpacity>

            <Text style={styles.instructions}>
              {this.state.isReady ? 'Player is ready.' : 'Player setting up...'}
            </Text>
            <Text style={styles.instructions}>Status: {this.state.status}</Text>
            <Text style={styles.instructions}>Quality: {this.state.quality}</Text>
            <Text style={styles.instructions}>
              {this.state.error ? `Error: ${this.state.error}` : ' '}
            </Text>
          </View>

          <FloatingActionButton
            onPressContact={this.props.onPressContact}
            onPressWatch={() => { return false; }}
            onPressListen={this.props.onPressListen}
            onPressGigs={this.props.onPressGigs}
          />
        </View>
      );
    }

  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});

export default connect(null, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs })(Watch);
