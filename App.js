/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import RootNavigation from './src/navigation/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootNavigation />
    </>
  );
};

export default App;
