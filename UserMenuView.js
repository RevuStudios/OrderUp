import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const menuItems = [
    {
        id: '1',
        name: 'Spaghetti Bolognese',
        description: 'Classic Italian pasta with tomato sauce and minced meat.',
        price: 'R12.99',
    },
    {
        id: '2',
        name: 'Margherita Pizza',
        description: 'Traditional pizza with tomato sauce, mozzarella, and basil.',
        price: 'R10.99',
    },
    {
        id: '3',
        name: 'Caesar Salad',
        description: 'Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.',
        price: 'R28.99',
    },
    // Add more menu items here
];

const UserMenuView = () => {
    const navigation = useNavigation();

    const handleItemClick = (item) => {
        // Handle the item click here, for example, navigate to the item's details screen.
        navigation.navigate('OrderView', { item });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleItemClick(item)}
        >
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={menuItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    menuItem: {
        marginBottom: 20,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 16,
        color: '#888',
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
    },
});

export default UserMenuView;
