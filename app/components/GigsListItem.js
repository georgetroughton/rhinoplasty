import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import { CardSection } from './common';

class GigsListItem extends Component {
  onRowPress() {
    const gigProps = { gig: this.props.gig, title: this.props.gig.date, venue: this.props.venue };
    if (this.props.fromHome) {
      Actions.nextGig(gigProps);
    } else {
      Actions.gig(gigProps);
    }
  }

  render() {
    const { date } = this.props.gig;
    const { name } = this.props.venue;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View style={styles.cardView}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {date}{'\n'}{name}
            </Text>
            <Icon name="md-information-circle" style={styles.actionButtonIcon} />
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    color: '#2C3E50',
    fontWeight: 'bold'
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

export default GigsListItem;
