import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderNavigator from './OrderNavigator';
import CartView from './CartView';

const Tab = createBottomTabNavigator();

const UserNavigator = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handlePlaceOrder = () => {
    console.log('Placing order:', cartItems);
    setCartItems([]);
  };

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={OrderNavigator} />
        <Tab.Screen
          name="Cart"
          options={{ title: 'Cart' }}
          children={() => (
            <CartView
              cartItems={cartItems}
              onRemoveItem={handleRemoveItem}
              onPlaceOrder={handlePlaceOrder}
            />
          )}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default UserNavigator;