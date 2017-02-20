/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView
} from 'react-native';

import TrackCell from './TrackCell';

const mockedData = [{ genre: 'Deep House',
  title: 'Bad Moon Rising',
  user: {
    username: 'manhattoes'
  },
  artwork_url: 'https://i1.sndcdn.com/artworks-000175437298-uaj7ae-t120x120.jpg',
  stream_url: 'https://api.soundcloud.com/tracks/191554493/stream'
}, { genre: 'Bass',
  title: 'Barefootin',
  user: {
    username: 'manhattoes'
  },
  artwork_url: 'https://i1.sndcdn.com/artworks-000175437298-uaj7ae-t120x120.jpg',
  stream_url: 'https://api.soundcloud.com/tracks/187885871/stream'
}];

class BrowseTracksView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(mockedData),
      nowPlaying: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
   // Return mocked data for now
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockedData)
    });
  }
  renderTrack(track) {
    return (
      <TrackCell track={track} />
    );
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderTrack}
        style={styles.listView}
      />
    );
  }

}

const styles = StyleSheet.create({
  listView: {
     backgroundColor: '#cccccc',
  }
});

export default BrowseTracksView;
