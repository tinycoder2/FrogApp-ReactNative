import React from 'react';
import { ScrollView, ImageBackground, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/originals/1d/a7/4e/1da74e3bc2233833fe96916a43458d98.gif' }}
            style={{ width: '100%', height: '100%' }}>
            <ScrollView style={styles.scrollView}>
                <Card style={styles.card}>
                    <Card.Title title="Navigate to 'Book' Screen" />
                    <Card.Content>
                        <Button color="#ffa31a" mode="contained" onPress={() => navigation.navigate('Other')}>
                            Navigate
                        </Button>
                    </Card.Content>
                </Card>
            </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        // backgroundColor: DefaultTheme.colors.background,
        paddingTop: 10
    },
    card: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: "#fff",
        backgroundColor: "rgba(18, 129, 73, 0.63)"
    }
});

export default HomeScreen