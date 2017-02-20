import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation';

import Home from './components/Home';
import Contact from './components/Contact';
import VideoList from './components/VideoList';
import Listen from './components/Listen';
import Gigs from './components/Gigs';
import Video from './components/Video';


const RouterComponent = ({ firestack }) => {
  return (
    <Router
      sceneStyle={{ paddingTop: 65, backgroundColor: '#cccccc' }}
      barButtonIconStyle={{ tintColor: '#2C3E50' }}
      navigationBarStyle={{ backgroundColor: '#cccccc' }}
      titleStyle={{ color: '#2C3E50', fontWeight: 'bold', fontSize: 18 }}
      renderRightButton={() => {
        return (<TouchableOpacity onPress={() => { Actions.home({ type: 'replace' }); }}>
                <Icon name="md-home" style={styles.actionButtonIcon} />
              </TouchableOpacity>);
      }}
      onBack={() => { Orientation.lockToPortrait(); Actions.pop(); }}
    >
      <Scene key="home">
        <Scene
          key="homeScene"
          component={Home}
          title="RhinoPlasty"
        />
      </Scene>
      <Scene key="contact">
        <Scene
          key="contactScene"
          component={Contact}
          title="Contact"
        />
      </Scene>
      <Scene key="watch">
        <Scene
          key="videoList"
          component={VideoList}
          title="YouTube Videos"
          firestack={firestack}
        />
        <Scene
          key="video"
          component={Video}
          title="Video"
        />
      </Scene>
      <Scene key="listen">
        <Scene
          key="listenScene"
          component={Listen}
          title="Listen"
        />
      </Scene>
      <Scene key="gigs">
        <Scene
          key="gigsScene"
          component={Gigs}
          title="Gigs"
        />
      </Scene>
    </Router>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 24,
    height: 26,
    color: 'black'
  }
});

export default RouterComponent;
