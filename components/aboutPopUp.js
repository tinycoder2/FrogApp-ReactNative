import React, { useState, useEffect, useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { CountContext, useCountContext } from '../context/countContextProvider';

export default function Popup() {
    const [modalVisible, setModalVisible] = useState(false);
    // const countContext = useCountContext();
    const countContext = useContext(CountContext);
    // useEffect(() => {

    // }, [CountContext.count]);
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
                        <Text style={styles.modalText}>Your current balance is $ {countContext.count}</Text>

                        <Pressable
                            style={[styles.button]}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                                console.log("modal", countContext.count);
                                // countContext.setCount(countContext.count + 1);
                            }
                            }
                        >
                            <Text style={styles.textStyle}>Okay!</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal >
            <Pressable
                style={styles.image}
                onPress={() => setModalVisible(true)}
            >
                <Image source={require('../imgs/forg.png')} />
            </Pressable>
        </View >
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
