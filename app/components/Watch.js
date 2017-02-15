import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';

import { FloatingActionButton } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs, videosFetch } from '../actions';
import ListItem from './ListItem';

class Watch extends Component {
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
    return <ListItem video={video} />;
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#f9f9f9' }}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}

        />
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

const mapStateToProps = (state) => {
  // const videos = _.map(state.videos, (val) => {
  //   return { ...val };
  // });
  const videos = state.videos;
  //const firestack = state.setup;

  return { videos };
};

export default connect(mapStateToProps, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs,
                               videosFetch })(Watch);
