import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Linking, Image, Dimensions } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CardSection } from './common';
import { VENUE_IMAGES } from './imageConstants';

class Gig extends Component {
  renderImage(image, height, width) {
    if (image !== '') {
      return (<Image
        source={{ uri: VENUE_IMAGES[image] }}
        resizeMode='contain'
        style={{ height, width: width - 30, marginTop: 10, marginBottom: 10 }}
      />);
    }
    return null;
  }
  renderWebIcon(website) {
    if (website !== '') {
      return (
        <TouchableOpacity
          onPress={() => Linking.openURL(website)}
        >
          <MCIcon name="web" style={styles.iconStyle} />
        </TouchableOpacity>
      );
    }
    return null;
  }
  renderMapIcon(map) {
    if (map !== '') {
      return (
        <TouchableOpacity
          onPress={() => Linking.openURL(map)}
        >
          <MCIcon name="google-maps" style={styles.iconStyle} />
        </TouchableOpacity>
      );
    }
    return null;
  }
  render() {
    const { width } = Dimensions.get('window');
    const { date, time } = this.props.gig;
    const { name, address, website, map, image, imageRatio } = this.props.venue;
    const height = ((width - 30) / imageRatio[0]) * imageRatio[1];
    return (
        <View style={styles.cardView}>
          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
            {this.renderImage(image, height, width)}
            <Text style={styles.bodyStyle}>
              {date} from {time}
              {'\n\n'}
              {address}
            </Text>
            <View style={styles.iconView}>
              {this.renderWebIcon(website)}
              {this.renderMapIcon(map)}
            </View>
          </CardSection>
        </View>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 20,
    color: '#2C3E50',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bodyStyle: {
    fontSize: 18,
    color: '#2C3E50',
    fontWeight: 'bold'
  },
  cardView: {
    margin: 5,
    padding: 5,
    backgroundColor: 'rgba(1,1,1,0.2)',
    borderRadius: 5,
    flex: 1
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
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderColor: '#2C3E50',
    borderTopWidth: 1,
    marginTop: 10
  }
};

export default Gig;
