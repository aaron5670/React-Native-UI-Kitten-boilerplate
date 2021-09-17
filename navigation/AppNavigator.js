import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNavigator} from "./BottomTabsNavigator";
import {DetailsScreen} from "../screens/DetailsScreen";
import {LoginScreen, RegisterScreen} from "../screens/auth";
import useStore from "../store/useStore";

const {Navigator, Screen} = createStackNavigator();

export const AppNavigator = () => {
  const isSignedIn = useStore(state => state.isSignedIn)

  return (
    <NavigationContainer>
      <Navigator>
        {isSignedIn ? (
          <>
            <Screen options={{headerShown: false}} name={'TabsNavigation'} component={BottomTabsNavigator}/>
            <Screen name='Details' component={DetailsScreen}/>
          </>
        ) : (
          <>
            <Screen options={{headerShown: false}} name={'Login'} component={LoginScreen}/>
            <Screen options={{headerShown: false}} name={'Register'} component={RegisterScreen}/>
          </>
        )}
      </Navigator>
    </NavigationContainer>
  )
};
