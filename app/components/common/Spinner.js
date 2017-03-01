import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Spinner = ({ size, connected }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{connected || ''}</Text>
      </View>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewStyle: {
    borderRadius: 5,
    margin: 10,
    padding: 5,
    backgroundColor: '#cccccc'
  },
  textStyle: {
    color: '#2C3E50',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  }
};

export { Spinner };
