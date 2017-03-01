import React, {
  Component
} from 'react';
import {
  Image,
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from 'react-native-slider';
import Video from 'react-native-video';

import { BAND_IMAGES } from './imageConstants';


const window = Dimensions.get('window');

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      muted: false,
      shuffle: false,
      sliding: false,
      currentTime: 0
    };
  }
  onLoad(params) {
    this.setState({ songDuration: params.duration });
  }

  onSlidingStart() {
    this.setState({ sliding: true });
  }
  onSlidingChange(value) {
    const newPosition = value * this.state.songDuration;
    this.setState({ currentTime: newPosition });
  }
  onSlidingComplete() {
    this.refs.audio.seek(this.state.currentTime);
    this.setState({ sliding: false });
  }
  onEnd() {
    this.setState({ playing: false });
  }
  setTime(params) {
    if (!this.state.sliding) {
      this.setState({ currentTime: params.currentTime });
    }
  }
  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }


  render() {
    let songPercentage;
    if (this.state.songDuration !== undefined) {
      songPercentage = this.state.currentTime / this.state.songDuration;
    } else {
      songPercentage = 0;
    }

    let playButton;
    if (this.state.playing) {
      playButton = (<Icon
                      onPress={this.togglePlay.bind(this)}
                      style={styles.play}
                      name="ios-pause"
                      size={70}
                      color="#2C3E50"
      />);
    } else {
      playButton = (<Icon
                      onPress={this.togglePlay.bind(this)}
                      style={styles.play}
                      name="ios-play"
                      size={70}
                      color="#2C3E50"
      />);
    }


    const image = BAND_IMAGES[this.props.track.albumImage];
    return (
      <View style={styles.container}>
        <Video
source={{ uri: this.props.track.url }}
            ref="audio"
            volume={this.state.muted ? 0 : 1.0}
            muted={false}
            paused={!this.state.playing}
            onLoad={this.onLoad.bind(this)}
            onProgress={this.setTime.bind(this)}
            onEnd={this.onEnd.bind(this)}
            resizeMode="cover"
            repeat
        />

        <View style={styles.header}>
          <Text style={styles.headerText} />
        </View>

        <Image
          style={[styles.songImage, { width: window.width - 30, height: 300 }]}
          source={{ uri: image }}
        />
        <View style={styles.sliderContainer}>
          <Slider
            onSlidingStart={this.onSlidingStart.bind(this)}
            onSlidingComplete={this.onSlidingComplete.bind(this)}
            onValueChange={this.onSlidingChange.bind(this)}
            minimumTrackTintColor='#851c44'
            style={styles.slider}
            trackStyle={styles.sliderTrack}
            thumbStyle={styles.sliderThumb}
            value={songPercentage}
          />

          <View style={styles.timeInfo}>
            <Text style={styles.time}>{ formattedTime(this.state.currentTime) }</Text>
            <Text
              style={styles.timeRight}
            >- { formattedTime(this.state.songDuration - this.state.currentTime) }
            </Text>
          </View>
        </View>
        <View style={styles.controls}>
          { playButton }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#CCC',
  },
  header: {
    marginTop: 17,
    marginBottom: 17,
    width: window.width,
  },
  headerClose: {
    position: 'absolute',
    top: 10,
    left: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    color: '#2C3E50',
    fontSize: 18,
    textAlign: 'center',
  },
  songImage: {
    marginBottom: 20,
  },
  songTitle: {
    color: 'white',
    fontFamily: 'Helvetica Neue',
    marginBottom: 10,
    marginTop: 13,
    fontSize: 19
  },
  albumTitle: {
    color: '#BBB',
    fontFamily: 'Helvetica Neue',
    fontSize: 14,
    marginBottom: 20,
  },
  controls: {
    flexDirection: 'row',
    marginTop: 30,
  },
  back: {
    marginTop: 22,
    marginLeft: 45,
  },
  play: {
    marginLeft: 50,
    marginRight: 50,
  },
  forward: {
    marginTop: 22,
    marginRight: 45,
  },
  shuffle: {
    marginTop: 26,
  },
  volume: {
    marginTop: 26,
  },
  sliderContainer: {
    width: window.width - 40,
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#2C3E50',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#2C3E50',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    width: 10,
    height: 10,
    backgroundColor: '#2C3E50',
    borderRadius: 10 / 2,
    shadowColor: '#333',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  }
});

//TODO: Move this to a Utils file
function withLeadingZero(amount) {
  if (amount < 10) {
    return `0${amount}`;
  }
    return `${amount}`;
}

function formattedTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds - (minutes * 60);

  if (isNaN(minutes) || isNaN(seconds)) {
    return '';
  }
    return (`${withLeadingZero(minutes)}:${withLeadingZero(seconds.toFixed(0))}`);
}


export default Player;
