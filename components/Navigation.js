// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import HomeScreen from '../screens/HomeScreen';
import Food from './HomeScreens/FoodDesc';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown : false}}
      >
        <Stack.Screen name="Log" component={Login} />
        <Stack.Screen name="Page" component={HomeScreen} />
        <Stack.Screen name='FoodDesc' component={Food}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;