import React from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';
import Orientation from 'react-native-orientation';

import Home from './components/Home';
import Contact from './components/Contact';
import VideoList from './components/VideoList';
import Listen from './components/Listen';
import GigsList from './components/GigsList';
import Video from './components/Video';
import Gig from './components/Gig';
import Player from './components/Player';


const RouterComponent = ({ firestack }) => {
  const navBarHeight = Platform.OS === 'ios' ? 64 : 54;
  return (
    <Router
      sceneStyle={{ paddingTop: navBarHeight, backgroundColor: '#cccccc' }}
      barButtonIconStyle={{ tintColor: '#2C3E50' }}
      navigationBarStyle={{ backgroundColor: '#cccccc' }}
      titleStyle={{ color: '#2C3E50', fontWeight: 'bold', fontSize: 20 }}
      renderRightButton={() => {
        return (
          <TouchableOpacity
                  onPress={() => {
                                    Orientation.lockToPortrait();
                                    Actions.home({ type: 'replace' });
                                  }
                        }
          >
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
          hideNavBar
          sceneStyle={{ paddingTop: 0 }}
          firestack={firestack}
          initial
        />
        <Scene
          key="nextGig"
          component={Gig}
          title="Gig"
          hideNavBar={false}
          renderRightButton={() => {}}
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
        <Scene
          key="player"
          component={Player}
          title="Listen"
        />
      </Scene>
      <Scene key="gigs">
        <Scene
          key="gigsList"
          component={GigsList}
          title="Gigs"
        />
        <Scene
          key="gig"
          component={Gig}
          title="Gig"
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
