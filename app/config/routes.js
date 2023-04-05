import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeContainer from '../screens/HomeContainer';
import SignIn from '../screens/SignIn';

const Stack = createStackNavigator();

const RootStack = screen => {
  let initialScreen = screen;
  initialScreen = 'SignIn';

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          swipeEnabled: false,
          headerShown: false,
          animation: 'fade',
        }}
        initialRouteName={initialScreen}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={HomeContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
