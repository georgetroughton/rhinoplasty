/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Platform
} from 'react-native';
import YouTube from 'react-native-youtube';
import Orientation from 'react-native-orientation';

class Video extends Component {
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
    componentDidMount() {
      Orientation.lockToLandscape();
    }
    render() {
      const { height } = Dimensions.get('window');
      const iosStyle = { alignSelf: 'stretch', height: height - 65 };
      const androidStyle = { width: ((height - 95) / 9) * 16, height: height - 95 };
      return (
        <View style={styles.container}>
          <YouTube
            videoId={this.props.video.id}
            apiKey="AIzaSyDLYzgx2klT7lwdFZGj-C-InUxwN0C59tc"
            play={this.state.isPlaying}
            hidden={false}
            playsInline
            onReady={() => { this.setState({ isReady: true }); }}
            onChangeState={(e) => { this.setState({ status: e.state }); }}
            onChangeQuality={(e) => { this.setState({ quality: e.quality }); }}
            onError={(e) => { this.setState({ error: e.error }); }}
            style={[Platform.OS === 'ios' ? iosStyle : androidStyle, {
                     backgroundColor: '#cccccc',
                     marginVertical: 0 }]}
          />
        </View>

      );
    }

  }

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#cccccc'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#2C3E50',
    marginBottom: 5
  },
});

export default Video;
