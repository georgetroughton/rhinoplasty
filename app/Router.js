import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from './components/Home';
import Contact from './components/Contact';
import Watch from './components/Watch';
import Listen from './components/Listen';
import Gigs from './components/Gigs';

const RouterComponent = () => {
  return (
    <Router
      sceneStyle={{ paddingTop: 65 }}
      navigationBarStyle={{ backgroundColor: '#f9f9f9' }}
      titleStyle={{ color: '#000000', fontWeight: 'bold', fontSize: 18 }}
      renderRightButton={() => {
        return (<TouchableOpacity onPress={() => { Actions.home({ type: 'replace' }); }}>
                <Icon name="md-home" style={styles.actionButtonIcon} />
              </TouchableOpacity>);
      }}
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
          key="watchScene"
          component={Watch}
          title="Watch"
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
