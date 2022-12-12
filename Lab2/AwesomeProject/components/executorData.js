import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const ExecutorData = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.executorText}>Created by: Timofeyeva Oleksandra TTP-42</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    height: 28,
    alignItems: 'start',
    justifyContent: 'start',
    backgroundColor: '#fff',
  },
  executorText: {
    alignItems: 'start',
    justifyContent: 'start',
    color: '#010101',
    fontSize: 18,
  },
  photo: {
    height: 190,
    width: '100%',
    marginVertical: 20,
    marginBottom: 12,
  },
});

export default ExecutorData;
