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
  Text
} from 'react-native';
import { connect } from 'react-redux';

import { FloatingActionButton } from './common';
import { onPressContact,
         onPressWatch,
         onPressListen,
         onPressGigs,
         gigsFetch,
         unmountFirebaseGigs } from '../actions';
import GigsListItem from './GigsListItem';

class Home extends Component {
    state = {
      firstVisit: ''
    };

    componentWillMount() {
      this.props.gigsFetch(this.props.firestack);
    }

    componentDidMount() {
      this._loadInitialState().done();
    }

    componentWillUnmount() {
      this.props.unmountFirebaseGigs(this.props.firestack);
    }

    _loadInitialState = async () => {
      try {
        const value = await AsyncStorage.getItem('firstVisit');
        if (value !== null) {
          this.setState({ firstVisit: value });
          console.log(value);
        } else {
          this.setState({ firstVisit: 'yes' });
        }
      } catch (error) {
        this.setState({ firstVisit: 'yes' });
      }
    };
    renderOnboardingOverlay(useWidth) {
      if (this.state.firstVisit === 'yes') {
        AsyncStorage.setItem('firstVisit', 'no');
        return (
          <View style={styles.onboardingView}>
            <Text style={styles.onboardingText}>
              <Text style={{ fontWeight: 'bold' }}>Welcome to the RhinoPlasty App!{'\n\n'}</Text>
              To get around use the menu button placed bottom right of the screen.{'\n\n'}
              Hope to see you out there at a gig sometime!
              </Text>
          </View>
        );
      }
      if (this.props.gig) {
        return (
          <View style={[{ width: useWidth - 20 }, styles.nextGigView]}>
            <GigsListItem gig={this.props.gig} fromHome />
          </View>
        );
      }
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
              {this.renderOnboardingOverlay(useWidth)}
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
      marginBottom: 100,
      padding: 8,
      backgroundColor: 'rgba(255,255,255,0.6)',
      borderRadius: 5
    },
    onboardingText: {
      color: '#000000',
      fontSize: 18
    },
    nextGigView: {
      marginBottom: 100,
      padding: 0,
      backgroundColor: '#cccccc',
      borderRadius: 5
    }
  };

  const mapStateToProps = ({ home, gigs }) => {
    const { error, loading } = home;
    const gig = gigs[0];
    console.log(gigs[0]);
    return { error, loading, gig };
  };

  export default connect(mapStateToProps, { onPressContact,
                                            onPressWatch,
                                            onPressListen,
                                            onPressGigs,
                                            gigsFetch,
                                            unmountFirebaseGigs })(Home);
