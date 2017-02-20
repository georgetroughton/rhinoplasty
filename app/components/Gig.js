import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { CardSection } from './common';

class Gig extends Component {

  render() {
    const { date, time, venue, address } = this.props.gig;

    return (
        <View style={styles.cardView}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {date}
              {'\n\n'}
              {time}
              {'\n\n'}
              {venue}
              {'\n\n'}
              {address}
            </Text>
          </CardSection>
        </View>
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

export default Gig;
