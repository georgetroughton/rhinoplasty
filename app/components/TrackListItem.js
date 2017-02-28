import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import { CardSection } from './common';

class TrackListItem extends Component {
  onRowPress() {
    Actions.player({ track: this.props.track, title: this.props.track.title });
  }

  render() {
    const { title } = this.props.track;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.cardView}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
            <Icon name="md-play" style={styles.actionButtonIcon} />
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    color: '#2C3E50'
  },
  cardView: {
    margin: 5,
    padding: 5,
    backgroundColor: 'rgba(1,1,1,0.2)',
    borderRadius: 5
  },
  actionButtonIcon: {
    fontSize: 24,
    height: 26,
    color: '#2C3E50'
  }
};

export default TrackListItem;
