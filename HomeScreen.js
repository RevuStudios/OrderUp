import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AdminOrderList from './AdminOrderList';
import UserMenuView from './UserMenuView';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <UserMenuView />
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

export default HomeScreen;
