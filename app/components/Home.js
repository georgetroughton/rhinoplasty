/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  AsyncStorage,
  Text,
  NetInfo
} from 'react-native';
import { connect } from 'react-redux';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FloatingActionButton, Spinner } from './common';
import { onPressContact,
         onPressWatch,
         onPressListen,
         onPressGigs,
         gigsFetch,
         videosFetch,
         unmountFirebaseGigs,
         unmountFirebaseVideos,
         tracksFetch,
         unmountFirebaseTracks,
         venuesFetch,
         unmountFirebaseVenues } from '../actions';
import GigsListItem from './GigsListItem';

class Home extends Component {
    state = {
      isConnected: null,
      firstVisit: ''
    };

    componentWillMount() {
      this.props.gigsFetch(this.props.firestack);
      this.props.videosFetch(this.props.firestack);
      this.props.tracksFetch(this.props.firestack);
      this.props.venuesFetch(this.props.firestack);
    }

    componentDidMount() {
      NetInfo.isConnected.addEventListener(
        'change',
        this._handleConnectivityChange
      );
      NetInfo.isConnected.fetch().done(
          (isConnected) => { this.setState({ isConnected }); }
      );
      this._loadInitialState().done();
    }

    componentWillUnmount() {
      NetInfo.isConnected.removeEventListener(
        'change',
        this._handleConnectivityChange
      );
      this.props.unmountFirebaseGigs(this.props.firestack);
      this.props.unmountFirebaseVideos(this.props.firestack);
      this.props.unmountFirebaseTracks(this.props.firestack);
      this.props.unmountFirebaseVenues(this.props.firestack);
    }

    _handleConnectivityChange = (isConnected) => {
      this.setState({
        isConnected,
      });
    };

    _loadInitialState = async () => {
      try {
        const value = await AsyncStorage.getItem('firstVisit');
        if (value !== null) {
          this.setState({ firstVisit: value });
          //console.log(value);
        } else {
          this.setState({ firstVisit: 'yes' });
        }
      } catch (error) {
        this.setState({ firstVisit: 'yes' });
      }
    };

    renderOnboardingOverlay() {
      if (this.state.firstVisit === 'yes') {
        AsyncStorage.setItem('firstVisit', 'no');
        return (
          <View style={styles.onboardingView}>
            <Text style={styles.onboardingText}>
              <Text style={{ fontWeight: 'bold' }}>Welcome to the RhinoPlasty App!{'\n\n'}</Text>
              To get around use the menu button placed bottom right of the screen.
              </Text>
          </View>
        );
      }
      return null;
    }

    renderNextGigView(useWidth) {
      if (this.props.gig && this.props.venues) {
        return (
          <View style={[{ width: useWidth - 20 }, styles.nextGigView]}>
          {this.renderOnboardingOverlay()}
            <Text style={styles.nextGigText}>
              <MCIcon name="guitar-electric" style={styles.actionButtonIcon} />
              Join us at our next gig!
            </Text>
            <GigsListItem
              gig={this.props.gig}
              venue={this.props.venues[this.props.gig.venue]}
              fromHome
            />
          </View>
        );
      }
      return (<Spinner
                size="large"
                connected={this.state.isConnected ? 'Beware data charges!' : 'You do not seem to be connected!'}
      />);
    }
    render() {
      const { width, height } = Dimensions.get('window');
      const useWidth = width < height ? width : height;
      const useHeight = width < height ? height : width;
      return (
        <View
          style={styles.mainView}
        >
            <View>
              <Image
                source={require('../assets/images/mob-bg-bw.png')}
                resizeMode='contain'
                style={[{ width: useWidth, height: useHeight }, styles.mainImage]}
              >
              {this.renderNextGigView(useWidth)}
              </Image>
            </View>

          <FloatingActionButton
            bgColor={'rgba(80,80,80,1)'}
            onPressContact={this.props.onPressContact}
            onPressWatch={this.props.onPressWatch}
            onPressListen={this.props.onPressListen}
            onPressGigs={this.props.onPressGigs}
          />

        </View>
      );
    }

  }

  const styles = {
    mainView: {
      flex: 1,
      backgroundColor: '#000000'
    },
    mainImage: {
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    onboardingView: {
      padding: 8,
      backgroundColor: '#cccccc',
      borderRadius: 5
    },
    onboardingText: {
      color: '#2C3E50',
      fontSize: 18
    },
    nextGigView: {
      marginBottom: 100,
      padding: 0,
      backgroundColor: '#cccccc',
      borderRadius: 5
    },
    nextGigText: {
      margin: 10,
      fontWeight: 'bold',
      fontSize: 18,
      color: '#2C3E50'
    },
    actionButtonIcon: {
      fontSize: 30,
      height: 32,
      color: '#2C3E50'
    }
  };

  const mapStateToProps = ({ home, gigs, venues }) => {
    const { error, loading } = home;
    const gig = gigs[0];
    return { error, loading, gig, venues };
  };

  export default connect(mapStateToProps, { onPressContact,
                                            onPressWatch,
                                            onPressListen,
                                            onPressGigs,
                                            gigsFetch,
                                            unmountFirebaseGigs,
                                            videosFetch,
                                            unmountFirebaseVideos,
                                            tracksFetch,
                                            unmountFirebaseTracks,
                                            venuesFetch,
                                            unmountFirebaseVenues })(Home);
