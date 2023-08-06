import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserMenuView from "./UserMenuView";
import UserOrderView from './UserOrderView';

const Stack = createStackNavigator();

const OrderNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={UserMenuView} options={{ title: 'Restaurant Menu' }} />
        <Stack.Screen name="OrderView" component={UserOrderView} options={{ title: 'Order Item' }} />
      </Stack.Navigator>
  );
};

export default OrderNavigator;