import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuView = () => {
  const [menuItem, setMenuItem] = useState('');
  const [menuPrice, setMenuPrice] = useState('');
  const [menuItems, setMenuItems] = useState([]);

  const handleAddItem = () => {
    if (menuItem.trim() !== '' && menuPrice.trim() !== '') {
      const newItem = { item: `${menuItem} - $${menuPrice}`, id: String(Date.now()) };
      setMenuItems((prevItems) => [...prevItems, newItem]);
      setMenuItem('');
      setMenuPrice('');
    }
  };

  const handleDeleteItem = (id) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Text>{item.item}</Text>
      <TouchableOpacity onPress={() => handleDeleteItem(item.id)} style={styles.deleteButton}>
        <Icon name="trash" size={20} color="#f00" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={menuItem}
          onChangeText={setMenuItem}
          placeholder="Enter a new menu item"
          style={styles.input}
        />
        <TextInput
          value={menuPrice}
          onChangeText={setMenuPrice}
          placeholder="Enter the price"
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity onPress={handleAddItem} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={menuItems}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        style={styles.table}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  table: {
    flex: 1,
  },
  menuItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    padding: 5,
  },
});

export default MenuView;
