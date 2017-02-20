/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';
import { connect } from 'react-redux';

import { FloatingActionButton } from './common';
import { onPressContact, onPressWatch, onPressListen, onPressGigs } from '../actions';
import BrowseTracksView from './BrowseTracksView';
import NowPlayingFooterView from './NowPlayingFooterView';

class Listen extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#cccccc' }}>
        <BrowseTracksView />
        <NowPlayingFooterView />

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

export default connect(null, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs })(Listen);
