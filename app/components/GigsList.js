import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import Orientation from 'react-native-orientation';

import { FloatingActionButton } from './common';
import { onPressContact,
         onPressWatch,
         onPressListen,
         onPressGigs,
         gigsFetch,
         unmountFirebaseGigs } from '../actions';
import GigsListItem from './GigsListItem';

class GigsList extends Component {
  componentWillMount() {
    this.props.gigsFetch(this.props.firestack);

    this.createDataSource(this.props);
  }
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }
  componentWillUnmount() {
    this.props.unmountFirebaseGigs(this.props.firestack);
  }

  createDataSource({ gigs }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(gigs);
  }

  renderRow(gig) {
    return <GigsListItem gig={gig} />;
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
          onPressListen={this.props.onPressListen}
          onPressGigs={() => { return false; }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const gigs = state.gigs;
  return { gigs };
};

export default connect(mapStateToProps, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs,
                               gigsFetch,
                               unmountFirebaseGigs })(GigsList);
