import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import Orientation from 'react-native-orientation';

import { FloatingActionButton } from './common';
import { onPressContact,
         onPressWatch,
         onPressListen,
         onPressGigs } from '../actions';
import GigsListItem from './GigsListItem';

class GigsList extends Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }
  componentWillMount() {
    this.createDataSource(this.props);
  }
  componentDidMount() {
    Orientation.lockToPortrait();
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ gigs }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(gigs);
  }

  renderRow(gig) {
    const venue = this.props.venues[gig.venue];
    return <GigsListItem gig={gig} venue={venue} />;
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
          bgColor={'rgba(80,80,80,1)'}
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
  const venues = state.venues;
  console.log(state);
  return { gigs, venues };
};

export default connect(mapStateToProps, { onPressContact,
                               onPressWatch,
                               onPressListen,
                               onPressGigs })(GigsList);
