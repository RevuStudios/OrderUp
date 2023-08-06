import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AdminMenuView from './AdminMenuView';

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <AdminMenuView/>
      {/* Your menu screen content goes here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MenuScreen;
