import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Linking } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CardSection } from './common';

class Gig extends Component {

  render() {
    const { date, time, venue, address, website, map } = this.props.gig;

    return (
        <View style={styles.cardView}>
          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.titleStyle}>
              {venue}
              {'\n\n'}
              {date} from {time}
              {'\n\n'}
              {address}
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => Linking.openURL(website)}
              >
                <MCIcon name="web" style={styles.iconStyle} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL(map)}
              >
                <MCIcon name="google-maps" style={styles.iconStyle} />
              </TouchableOpacity>
            </View>
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
  },
  iconStyle: {
    fontSize: 40,
    height: 40,
    color: '#2C3E50',
    margin: 10
  }
};

export default Gig;
