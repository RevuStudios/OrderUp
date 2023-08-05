import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const OrderList = () => {
    // Sample orders data
    const initialOrders = [
        { id: '1', orderNumber: 'ORD001', order: 'Omelette', customer: 'John Doe' },
        { id: '2', orderNumber: 'ORD002', order: 'Chicken and Mayo', customer: 'Jane Smith' },
        { id: '3', orderNumber: 'ORD003', order: 'Salad', customer: 'Mike Johnson' },
        { id: "4", orderNumber: "ORD004", order: "Pizza", customer: "John Doe" },
        { id: "5", orderNumber: "ORD005", order: "Burger", customer: "Jane Smith" },
        { id: "6", orderNumber: "ORD006", order: "Sushi", customer: "Mike Johnson" },
        // Add more orders as needed
    ];

    const [orders, setOrders] = useState(initialOrders);
    const handleDeleteOrder = (orderId) => {
        // Implement the logic to delete the order with the given ID from the list
        // For example, you can use state or Redux to manage the list of orders
        console.log('Deleted order with ID:', orderId);
    };

    const renderOrderItem = ({ item }) => (
        <View style={styles.orderItem}>
            <View style={styles.orderInfo}>
                <Text>Order Number: {item.orderNumber}</Text>
                <Text>Order: {item.order}</Text>
                <Text>Customer: {item.customer}</Text>
            </View>
            <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteOrder(item.id)}
            >
                <Icon name="trash" size={20} color="#f00" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                renderItem={renderOrderItem}
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
    orderItem: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    deleteButton: {
        padding: 5,
    },
});

export default OrderList;