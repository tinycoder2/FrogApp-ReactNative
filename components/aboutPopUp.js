import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";

export default function Popup() {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Image source={require('../imgs/icons8-cash-50.png')} />
                        <Text style={styles.modalTitle}>Welcome to froggo wallet!</Text>
                        <Text style={styles.modalText}>Your current balance is $500.</Text>

                        <Pressable
                            style={[styles.button]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Okay!</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={styles.image}
                onPress={() => setModalVisible(true)}
            >
                <Image source={require('../imgs/forg.png')} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 30,
        padding: 35,
        alignItems: "center",
        elevation: 15
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: "#39ac73",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalTitle: {
        marginBottom: 15,
        fontWeight: "bold",
        textAlign: "center",

    },

    image: {
        justifyContent: 'flex-start',
        paddingBottom: 15,
    }
});