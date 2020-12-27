/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import firebase from 'firebase';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation/index';
import LoginForm from './src/auth/LoginForm';
import Profile from './src/auth/Profile';
import {Header, Spinner} from './src/auth/common';
export default class App extends React.Component {
  state = {loggedIn: false};

  constructor(props) {
    super(props);
    firebase.initializeApp({
      apiKey: 'AIzaSyBoRomqSQZme4TCKH9sd9ko2kXKV0dfhfA',
      authDomain: 'tiktok-clone-61075.firebaseapp.com',
      projectId: 'tiktok-clone-61075',
      storageBucket: 'tiktok-clone-61075.appspot.com',
      messagingSenderId: '207562137789',
      appId: '1:207562137789:web:8770bfa049efaa36b057d4',
      measurementId: 'G-VPY4EQH1QH',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }

  renderForm() {
    if (this.state.loggedIn) {
      <>
        <StatusBar barStyle="light-content" />
        <RootNavigation />
      </>;
    } else {
      return (
        <>
          <SafeAreaView>
            <LoginForm />
          </SafeAreaView>
        </>
      );
    }
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <RootNavigation />
      </>
    );
  }
}
