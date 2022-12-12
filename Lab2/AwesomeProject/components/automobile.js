import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import * as SQLite from 'expo-sqlite'
import * as FileSystem from "expo-file-system";
import {Asset} from "expo-asset";


const db = SQLite.openDatabase('auto.db');

export default class Automobile extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: "",
    };

    async function openDatabaseIShipWithApp() {
      const internalDbName = "auto.db"; // Call whatever you want
      const sqlDir = FileSystem.documentDirectory + "SQLite/";
      if (!(await FileSystem.getInfoAsync(sqlDir + internalDbName)).exists) {
          await FileSystem.makeDirectoryAsync(sqlDir, {intermediates: true});
          const asset = Asset.fromModule(require("../assets/auto.db"));
          await FileSystem.downloadAsync(asset.uri, sqlDir + internalDbName);
      }
      this.database = SQLite.openDatabase(internalDbName);
    }
    openDatabaseIShipWithApp();

    database.transaction((tx) => {
      tx.executeSql('SELECT * FROM Car WHERE color=&', ['red'], (tx, results) => {
          var len = results.rows.length;
          if(len > 0) {
            var row = results.rows.item(0);
            this.setState({id: row.id});
          }
        });
    });
  }

  render() {
    return (
      <View>
        <Text>{'red car id is:' + this.state.id}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    height: 28,
    alignItems: 'start',
    justifyContent: 'start',
    backgroundColor: '#fff',
  },
});

