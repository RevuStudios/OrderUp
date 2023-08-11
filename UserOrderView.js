import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRoute } from '@react-navigation/native';

const OrderView = ({ onAddToCart }) => {
    const route = useRoute();
    const item = route.params?.item;
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                {/* Image */}
                <Image
                    source={{ uri: 'url_for_item_image' }} // Replace with the actual image URL
                    style={styles.itemImage}
                />

                {/* Name */}
                <Text style={styles.itemName}>{item.name}</Text>

                {/* Description */}
                <Text style={styles.itemDescription}>{item.description}</Text>

                {/* Price */}
                <Text style={styles.itemPrice}>{item.price}</Text>

                {/* Quantity */}
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={handleDecreaseQuantity}>
                        <Text style={styles.quantityArrow}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                        value={String(quantity)}
                        onChangeText={(text) => setQuantity(parseInt(text, 10))}
                        keyboardType="numeric"
                        editable={false} // Disable the keyboard
                        style={styles.quantityInput}
                    />
                    <TouchableOpacity onPress={handleIncreaseQuantity}>
                        <Text style={styles.quantityArrow}>+</Text>
                    </TouchableOpacity>
                </View>

                {/* Special Instructions */}
                <TextInput
                    placeholder="Special Instructions"
                    value={specialInstructions}
                    onChangeText={setSpecialInstructions}
                    style={styles.specialInstructionsInput}
                    multiline // Allow multiple lines
                    numberOfLines={4} // Set the initial number of lines
                />

                {/* Add to Cart Button */}
                <TouchableOpacity onPress={() => onAddToCart(item)} style={styles.addToCartButton}>
                    <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    itemImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    itemDescription: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    quantityArrow: {
        fontSize: 24,
        paddingHorizontal: 10,
    },
    quantityInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        flex: 1,
    },
    addToCartButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    addToCartButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    specialInstructionsInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        textAlignVertical: 'top', // Start typing from the top
    },
});

export default OrderView;
