import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
        <Text>Stukalo Bogdan Variant 5 Linear Equations</Text>  
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    
  }
});

export default Header;