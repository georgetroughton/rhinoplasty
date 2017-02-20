import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { CardSection } from './common';

class TrackCell extends Component {
  render() {
    return (
      <View style={styles.cardView}>
        <CardSection>
          <Image
            source={{ uri: this.props.track.artwork_url }}
            style={styles.thumbnail}
          />
          <Text style={styles.titleStyle}>
            {this.props.track.title}
          </Text>
          <Icon name="md-arrow-forward" style={styles.actionButtonIcon} />
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
  thumbnail: {
    width: 30,
    height: 30
  }
};

// <View style={styles.trackCell}>
//   <Image
//     source={{ uri: this.props.track.artwork_url }}
//     style={styles.thumbnail}
//   />
//   <View style={styles.rightContainer}>
//     <Text style={styles.trackTitle}>{this.props.track.title}</Text>
//   </View>
// </View>
// const styles = StyleSheet.create({
//   trackCell: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 4,
//     marginRight: 4,
//     padding: 4,
//     borderBottomWidth: 0.5,
//     borderColor: 'lightgray'
//   },
//   trackTitle: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'center'
//   },
//   trackArtist: {
//     fontSize: 12,
//     marginBottom: 6,
//     textAlign: 'center'
//   },
//   rightContainer: {
//     flex: 1
//   },
//   thumbnail: {
//     width: 50,
//     height: 50
//   }
// });

export default TrackCell;
