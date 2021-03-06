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
  NetInfo,
  Platform
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
import { APP_IMAGES } from './imageConstants';
import { TEXT_COLOUR_PRIMARY,
         ICON_COLOUR_PRIMARY,
         BACKGROUND_COLOUR_PRIMARY,
         ACTION_BUTTON_BACKGROUND_PRIMARY } from '../styles/common';

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

    getFormattedDate(date) {
      const month = (`0${date.getMonth() + 1}`).slice(-2);
      const day = (`0${date.getDate()}`).slice(-2);
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }

    getNextGig() {
      const gigs = this.props.gigs;
      const dates = [];
      const gigdates = [];
      for (const gig of Object.keys(gigs)) {
        gigdates.push(this.toDate(gigs[gig].date));
      }
      const today = new Date();
      for (let i = 0; i < gigdates.length; i++) {
        const dateToPush = gigdates[i];
         if (dateToPush > today) {
           dates.push(dateToPush);
          }
      }
      dates.sort((a, b) => {
        return Math.abs((1 - a) / new Date()) - Math.abs((1 - b) / new Date());
      });
      const dateStr = this.getFormattedDate(dates[0]);
      let nextGig = {};
      for (const gig of Object.keys(gigs)) {
        if (gigs[gig].date === dateStr) {
          nextGig = gigs[gig];
        }
      }
      return nextGig;
    }

    toDate(dateStr) {
        const parts = dateStr.split('/');
        return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    _loadInitialState = async () => {
      try {
        const value = await AsyncStorage.getItem('firstVisit');
        if (value !== null) {
          this.setState({ firstVisit: value });
        } else {
          this.setState({ firstVisit: 'yes' });
        }
      } catch (error) {
        this.setState({ firstVisit: 'yes' });
      }
    };

    _handleConnectivityChange = (isConnected) => {
      this.setState({
        isConnected,
      });
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
      if (this.props.gig && this.props.venue) {
        //console.log(this.props.gigs);
        const gig = this.getNextGig();
        return (
          <View
            style={[{ width: useWidth - 20,
                      marginBottom: Platform.OS === 'ios' ? 120 : 150 },
                    styles.nextGigView]}
          >
            {this.renderOnboardingOverlay()}
            <Text style={styles.nextGigText}>
              <MCIcon name="guitar-electric" style={styles.actionButtonIcon} />
              Join us at our next gig!
            </Text>
            <GigsListItem
              gig={gig}
              venue={this.props.venues[gig.venue]}
              fromHome
            />
          </View>
        );
      }
      return (<Spinner
                size="large"
                connected={this.state.isConnected
                           ? 'Getting the good stuff!'
                           : 'Dude, you need to be connected!'}
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
                source={{ uri: APP_IMAGES.IMAGE_HOME }}
                resizeMode='cover'
                style={[{ width: useWidth, height: useHeight }, styles.mainImage]}
              >
              {this.renderNextGigView(useWidth)}
              </Image>
            </View>

          <FloatingActionButton
            bgColor={ACTION_BUTTON_BACKGROUND_PRIMARY}
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
      backgroundColor: BACKGROUND_COLOUR_PRIMARY
    },
    mainImage: {
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    onboardingView: {
      padding: 8,
      backgroundColor: BACKGROUND_COLOUR_PRIMARY,
      borderRadius: 5
    },
    onboardingText: {
      color: TEXT_COLOUR_PRIMARY,
      fontSize: 18
    },
    nextGigView: {
      padding: 0,
      backgroundColor: BACKGROUND_COLOUR_PRIMARY,
      borderRadius: 5
    },
    nextGigText: {
      margin: 10,
      fontWeight: 'bold',
      fontSize: 18,
      color: TEXT_COLOUR_PRIMARY
    },
    actionButtonIcon: {
      fontSize: 30,
      height: 32,
      color: ICON_COLOUR_PRIMARY
    }
  };

  const mapStateToProps = ({ home, gigs, venues }) => {
    const { error, loading } = home;
    const gig = Object.keys(gigs).length;
    const venue = Object.keys(venues).length;
    return { error, loading, gigs, venues, gig, venue };
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
