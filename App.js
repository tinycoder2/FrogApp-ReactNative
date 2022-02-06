import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ImageBackground, Alert, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';
import Header from './components/header';
import TodoItem from './components/dataItem';


export default function App() {
  const [data, setData] = useState([
    { title: 'For Pimbu', text: 'Buy coffee', amount: '$10', key: '1' },
    { title: 'For Luna', text: 'Groceries', amount: '$35', key: '2' },
    { title: 'For Peach', text: 'Pocket money', amount: '$20', key: '3' },
    { title: 'For Mario', text: 'Bday Gift', amount: '$50', key: '4' },
    { title: 'For Me', text: 'Pay bill', amount: '$70', key: '5' }
  ]);



  const pressHandler = (key) =>
    Alert.alert(
      "Payment Confirmation",
      "Are you sure you want to proceed with the payment?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Confirm Payment", onPress: () => {
            setData(prevdata => {
              return prevdata.filter(todo => todo.key != key);
            });
          }
        }

      ]
    );



  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/1d/a7/4e/1da74e3bc2233833fe96916a43458d98.gif' }}
      style={{ width: '100%', height: '100%' }}>
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
      }}>

        <View style={styles.container}>
          <Header />

          <View style={styles.content}>
            <ActivityIndicator size="small" color="#267326" />
            <View style={styles.list}>
              <FlatList
                data={data}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>



          </View>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },




});