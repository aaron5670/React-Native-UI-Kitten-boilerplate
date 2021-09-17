import React from 'react';
import {View} from 'react-native';
import {BottomNavigation, BottomNavigationTab, Divider} from '@ui-kitten/components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {VideosScreen} from '../screens/VideosScreen';
import {HomeScreen} from '../screens/HomeScreen';
import {HomeIcon, VideoIcon} from '../assets/icons';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => (
  <View>
    <Divider/>
    <BottomNavigation
      appearance='noIndicator'
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home' icon={HomeIcon}/>
      <BottomNavigationTab title='Videos' icon={VideoIcon}/>
    </BottomNavigation>
  </View>
);

export const BottomTabsNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Videos' component={VideosScreen}/>
  </Navigator>
);
