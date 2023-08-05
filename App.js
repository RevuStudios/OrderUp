import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OrderList from './OrderList';
import FooterMenu from './FooterMenu';
import Header from './Header';

export default function App() {

  const [activeMenuItem, setActiveMenuItem] = useState('1');

  const handleMenuItemPress = (itemId) => {
    setActiveMenuItem(itemId);
    // Perform actions based on the selected menu item if needed.
  };

  return (
    <View style={styles.container}>
    <Header title="Order Up" />
      <OrderList />
      <FooterMenu activeItem={activeMenuItem} onMenuItemPress={handleMenuItemPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
