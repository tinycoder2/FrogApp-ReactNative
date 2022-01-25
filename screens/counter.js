import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles'
export default function Count() {
    const [counter, setCounter] = useState(10000);
    const onPress = () => setCounter(prevCount => prevCount + 1);
    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/originals/1d/a7/4e/1da74e3bc2233833fe96916a43458d98.gif' }}
            style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>

                <Image source={require('../imgs/forg.png')} />
                <Text style={styles.title}>{counter} steps walked today</Text>

                <TouchableOpacity style={styles.loginBtn}
                    onPress={onPress}
                >
                    <Text style={styles.loginText}>++</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.boxText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.boxText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                </View>
            </View>

        </ImageBackground>


    );
}