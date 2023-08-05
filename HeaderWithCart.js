import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you are using FontAwesome icons, change it if you're using a different icon set

const HeaderWithCart = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>OrderUp</Text>
            <TouchableOpacity style={styles.cartIconContainer}>
                <Icon name="shopping-cart" size={24} color="#333" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        height: 60,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    logo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    cartIconContainer: {
        padding: 10,
    },
});

export default HeaderWithCart;