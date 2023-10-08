import React, { useState } from 'react';
import { Button } from 'react-native';

import { Amplify, API, graphqlOperation } from 'aws-amplify';
import config from './src/aws-exports';

import { Authenticator, useAuthenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(config);
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OrderNavigator from './OrderNavigator';
import CartView from './CartView';

const Tab = createBottomTabNavigator();

const SignOutButton = () => {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;

};

const UserNavigator = () => {

  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    console.log("cart items", cartItems)
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
        <Tab.Screen 
          name="Home"
          options={{
            headerRight: () => (
              <Authenticator.Provider>
                <Authenticator>
                  <SignOutButton />
                </Authenticator>
              </Authenticator.Provider>
            ),
          }}
          children={()=>(
            <OrderNavigator 
              handleAddtoCart={handleAddToCart}
            />
          )}
        />
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