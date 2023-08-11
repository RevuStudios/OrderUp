import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserMenuView from "./UserMenuView";
import UserOrderView from './UserOrderView';

const Stack = createStackNavigator();

const OrderNavigator = ({ handleAddtoCart }) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={UserMenuView} options={{ title: 'Menu' }} />
        <Stack.Screen 
          name="OrderView" 
          options={{ title: 'Order Item' }} 
          children={()=>(
            <UserOrderView 
              onAddToCart={ handleAddtoCart }
            />
          )}
        />
      </Stack.Navigator>
  );
};

export default OrderNavigator;