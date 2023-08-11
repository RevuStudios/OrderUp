import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminOrderList from './AdminOrderList';
import AdminMenuView from './AdminMenuView';

const Tab = createBottomTabNavigator();

const AdminNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={AdminOrderList} />
        <Tab.Screen name="Menu" component={AdminMenuView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AdminNavigator;