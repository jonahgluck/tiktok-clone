import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import HomeBottomTabNavigator from './homeBottomTabNavigator';
// import CreatePost from '../screens/CreatePost';
import HomeBottomTabNavigator from './HomeBottomTabNavigator';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Home" component={HomeBottomTabNavigator} /> */}
        <Stack.Screen
          options={{
            headerShown: false,
            // title: 'Home',
          }}
          name="Home"
          component={HomeBottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
