import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Popup from './aboutPopUp';
import CountContextProvider from '../context/countContextProvider';

export default function Header() {

    return (
        <View style={styles.header}>
            <CountContextProvider>
                <Popup />
            </CountContextProvider>
            <Text style={styles.title}>Froggo Wallet</Text>


        </View>



    );
}

const styles = StyleSheet.create({
    header: {
        // flex: 1,
        flexDirection: 'row',
        height: 100,
        paddingTop: 15,

        backgroundColor: '#339966',
    },
    title: {
        // textAlign: 'center',
        paddingTop: 30,
        // justifyContent: 'center',
        marginRight: 130,
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        // alignSelf: 'flex-start',
    }


});