import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FooterMenu = ({ activeItem, onMenuItemPress }) => {
    const menuItems = [
        { id: '1', title: 'Orders' },
        { id: '2', title: 'Settings' },
    ];

    return (
        <View style={styles.container}>
            {menuItems.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                        styles.menuItem,
                        activeItem === item.id && styles.activeMenuItem,
                    ]}
                    onPress={() => onMenuItemPress(item.id)}
                >
                    <Text
                        style={[
                            styles.menuItemText,
                            activeItem === item.id && styles.activeMenuItemText,
                        ]}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
        height: 60,
        paddingBottom: 20,
    },
    menuItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeMenuItem: {
        backgroundColor: '#ccc',
    },
    menuItemText: {
        fontSize: 16,
        color: '#333',
    },
    activeMenuItemText: {
        fontWeight: 'bold',
    },
});

export default FooterMenu;