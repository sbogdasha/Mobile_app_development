import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const ExecutorData = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title1}>Bogdan Stukalo TTP-42 var.2</Text>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 17,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        color: "red",
    },
    title1: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 18,
    },
})

export default ExecutorData;
