import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CartView = ({ cartItems, onRemoveItem, onPlaceOrder }) => {
    const renderItem = ({ item }) => (
        <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            <TouchableOpacity onPress={() => onRemoveItem(item.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
        </View>
    );

    const cartTotal = cartItems.reduce((total, item) => total + parseFloat(item.price.substring(1)), 0).toFixed(2);

    return (
        <View style={styles.container}>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyText}>Your cart is empty</Text>
            ) : (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />

                    {/* Cart Total */}
                    <Text style={styles.cartTotal}>Total: R{cartTotal}</Text>

                    {/* Place Order Button */}
                    <TouchableOpacity onPress={onPlaceOrder} style={styles.placeOrderButton}>
                        <Text style={styles.placeOrderButtonText}>Place Order</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    emptyText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    itemName: {
        fontSize: 16,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    removeButton: {
        backgroundColor: 'red',
        padding: 8,
        borderRadius: 5,
    },
    removeButtonText: {
        color: 'white',
    },
    cartTotal: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    placeOrderButton: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    placeOrderButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CartView;
