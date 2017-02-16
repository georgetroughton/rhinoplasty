import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';

import { FloatingActionButton } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs, videosFetch } from '../actions';
import VideoListItem from './VideoListItem';

class VideoList extends Component {
  componentWillMount() {
    this.props.videosFetch(this.props.firestack);

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ videos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(videos);
  }

  renderRow(video) {
    return <VideoListItem video={video} />;
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}

        />
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

const mapStateToProps = (state) => {
  const videos = state.videos;
  return { videos };
};

export default connect(mapStateToProps, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs,
                               videosFetch })(VideoList);
