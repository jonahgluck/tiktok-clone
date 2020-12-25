/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StatusBar} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './src/screens/Home/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
