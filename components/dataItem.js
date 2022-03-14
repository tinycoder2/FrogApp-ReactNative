import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';

export default function TodoItem({ pressHandler, item }) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text style={styles.itemValue}>${item.amount}</Text>
                <Image source={require('../imgs/icons8-coins-40.png')} />
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemText}>{item.text}</Text>


            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "rgba(153, 255, 153, 0.63)",
        padding: 16,
        marginTop: 16,
        borderRadius: 25,
        borderStyle: "dotted",
        borderColor: "#004d00",
        borderWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#004d00'
    },
    itemText: {
        marginLeft: 10,
        // padding: 10,
    },
    itemValue: {
        // marginRight: '10%',
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#004d00'

    }
});