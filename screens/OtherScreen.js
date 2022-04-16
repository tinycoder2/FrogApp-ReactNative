import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { Card } from 'react-native-paper';

function OtherScreen() {
    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/originals/1d/a7/4e/1da74e3bc2233833fe96916a43458d98.gif' }}
            style={{ width: '100%', height: '100%' }}>
            <View style={styles.container}>
                <Card style={styles.card}>
                    <Card.Title title="This is the Other Screen" />
                </Card>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

        alignItems: 'center',
        paddingTop: 10
    },
    card: {
        width: '90%',
        backgroundColor: "rgba(18, 129, 73, 0.63)"
    }
});

export default OtherScreen;