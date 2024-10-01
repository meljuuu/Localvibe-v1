import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';

import HomeScreen from '../src/screens/HomeScreen';
import PostScreen from '../src/screens/PostScreen';
import MapScreen from '../src/screens/MapScreen';
import NotificationScreen from '../src/screens/NotificationScreen';
import ProfileScreen from '../src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const homeIcon = require('../src/assets/navbar/home.png');
const bellIcon = require('../src/assets/navbar/bell.png');
const mapIcon = require('../src/assets/navbar/map.png');
const usersIcon = require('../src/assets/navbar/user.png');
const addIcon = require('../src/assets/navbar/add.png');

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          top: 60, // Move the navbar to the top
          height: 50,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          borderBottomWidth: 1,
          borderColor: '#C0C0C0',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={homeIcon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#017E5E' : '#748c94',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={mapIcon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#017E5E' : '#748c94',
              }}
            />
          ),
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.semicircle}>
              <View style={styles.postIconContainer}>
                <Image
                  source={addIcon}
                  resizeMode="contain"
                  style={styles.postIcon}
                />
              </View>
            </View>
          ),
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Notif"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={bellIcon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#017E5E' : '#748c94',
              }}
            />
          ),
          tabBarStyle: {display: 'none'},
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={usersIcon}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#017E5E' : '#748c94',
              }}
            />
          ),
          tabBarStyle: {display: 'none'},
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  semicircle: {
    position: 'absolute',
    top: 32, // Adjust this value to overlap the tab bar properly at the top
    width: 35,
    height: 35,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  postIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 35,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#C0C0C0',
  },
  postIcon: {
    width: 20,
    height: 20,
    tintColor: '#017E5E',
  },
});

export default Tabs;
