import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderNavigator from './OrderNavigator';

const Tab = createBottomTabNavigator();

const UserNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={OrderNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigator;