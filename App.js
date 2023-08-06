import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AdminNavigator from './AdminNavigator';

export default function App() {

  const [activeMenuItem, setActiveMenuItem] = useState('1');

  const handleMenuItemPress = (itemId) => {
    setActiveMenuItem(itemId);
    // Perform actions based on the selected menu item if needed.
  };

  return <AdminNavigator/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
