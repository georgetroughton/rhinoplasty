import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

export default class BlurComponent extends Component {
    render() {
        const { width, height } = Dimensions.get('window');
        return (
          <View
            style={{ flex: 1,
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     height,
                     width,
                     backgroundColor: 'rgba(80,80,80,0.7)' }}
          />
        );
    }
}
