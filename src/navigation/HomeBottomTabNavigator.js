import React from 'react';
import {Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UploadIcon from '../assets/images/plus-icon.png';
const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        initialRouteName: 'Home',
        borderTopWidth: 0,
        borderTopColor: 'transparent',
        backgroundColor: '#000',
        style: {
          height: '10%',
        },
        labelStyle: {
          fontSize: 10,
          marginBottom: '45%',
        },
        elevation: 0,
        shadowColor: '#5bc4ff',
        shadowOpacity: 0,
        shadowOffset: {
          height: 0,
        },
        shadowRadius: 0,
        tabStyle: {
          borderTopWidth: 0,
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
        safeAreaInsets: {
          bottom: 0,
        },
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Discover'}
        component={() => <Text>Discover</Text>}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name={'search1'} size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={() => <Text>Upload</Text>}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={UploadIcon}
              style={{
                height: 35,
                resizeMode: 'contain',
                marginBottom: '45%',
              }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={() => <Text>Inbox</Text>}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'message-minus-outline'}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Me'}
        component={() => <Text>Profile</Text>}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name={'ios-person-outline'} size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
