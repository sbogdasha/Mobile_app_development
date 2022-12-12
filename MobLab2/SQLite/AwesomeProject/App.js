import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import Database from './src/components/database';
import Contact from './src/components/contacts';
import ExecutorData from './src/components/executorData';


export default function App() {
  return (
    <View>
      <ExecutorData></ExecutorData>
      <Contact></Contact>
      <Database></Database> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: '#fff',
  }, 
  title: {
    fontSize: 24,
    color: "red",
  },
  text: {
    fontSize: 16,
  },
  map: {
    marginTop: 5,
    width: '100%',
    height: '10%',
  },
  search: {
    zIndex: 1,
    marginTop: 5,
    backgroundColor: 'white',
    fontSize: 16,
    height: '100%'
  },
  input: {
    borderColor: 'purple',
    borderWidth: 8,
  }
});
