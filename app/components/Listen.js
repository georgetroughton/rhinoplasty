import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import Orientation from 'react-native-orientation';

import { FloatingActionButton } from './common';
import { onPressContact,
         onPressWatch,
         onPressListen,
         onPressGigs } from '../actions';
import TrackListItem from './TrackListItem';

class Listen extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ tracks }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(tracks);
  }

  renderRow(track) {
    return <TrackListItem track={track} />;
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
          onPressWatch={this.props.onPressWatch}
          onPressListen={() => { return false; }}
          onPressGigs={this.props.onPressGigs}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const tracks = state.tracks;
  return { tracks };
};

export default connect(mapStateToProps, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs })(Listen);
