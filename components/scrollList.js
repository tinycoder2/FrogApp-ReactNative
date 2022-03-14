import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList, Alert, Text } from 'react-native';
import TodoItem from './dataItem';
import { CountContext, useCountContext } from '../context/countContextProvider';

export default function ScrollList() {
    // const countContext = useCountContext();
    const countContext = useContext(CountContext);

    useEffect(() => {

    }, [CountContext.count]);
    const [data, setData] = useState([
        { title: 'For Pimbu', text: 'Buy coffee', amount: 10, key: '1' },
        { title: 'For Luna', text: 'Groceries', amount: 35, key: '2' },
        { title: 'For Peach', text: 'Pocket money', amount: 20, key: '3' },
        { title: 'For Mario', text: 'Bday Gift', amount: 50, key: '4' },
        { title: 'For Me', text: 'Pay bill', amount: 70, key: '5' },
        { title: 'For Mario', text: 'Bday Gift', amount: 50, key: '6' },
        { title: 'For Me', text: 'Pay bill', amount: 70, key: '7' }
    ]);

    const pressHandler = (key) =>
        Alert.alert(
            "Payment Confirmation",
            "Are you really sure you want to proceed with the payment?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Confirm Payment", onPress: () => {
                        countContext.setCount(countContext.count - data.amount);
                        // countContext.setCount(data => {
                        //     return countContext.count - data.amount;
                        // });
                        // console.log("list :", countContext.count);
                        setData(prevdata => {
                            return prevdata.filter(data => data.key != key);
                        });


                    }
                }

            ]
        );
    return (
        <View style={styles.list}>
            <Text>{countContext.count}</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (

                    <TodoItem item={item} pressHandler={pressHandler} />

                )}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    list: {
        // marginTop: 20,
        flex: 1,
    },
});