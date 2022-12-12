import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TextInput,
    Alert,
    FlatList,
} from 'react-native';

import { RadioButton } from 'react-native-paper';
import { collection, onSnapshot } from 'firebase/firestore';
import {db} from '../config/firebase'
import { initializeApp } from "firebase/app";


import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { Marker } from 'react-native-maps';
import  MapViewDirections from 'react-native-maps-directions';

export default function Database() {
    const [region, setRegion] = useState({
        latitude: 50.441744,
        longitude: 30.522649,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      })
const [books, setBooks] = useState([]);
const [loading, setLoading] = useState(false);
const [yes, setYes] = useState(false);
const [checked, setChecked] = React.useState('wQ7L6x2QF4abV9FKQ2ib');
var i = 0;

useEffect(() => {
    setLoading(true);
    const booksQuery = collection(db, 'books');

    onSnapshot(booksQuery, (snapshot) => {
        let booksList = [];
        snapshot.docs.map((doc) => booksList.push({...doc.data(), id: doc.id}))
        setBooks(booksList);
        setLoading(true);
    })
}, [])

    var renderItem = ({item}) => {
        if(item.year <= 2012)
        {
            i++;
            console.log("Item address: " + item.address.latitude);
            if(i == 1){
                setRegion({latitude: item.address.latitude, longitude: item.address.longitude});
                console.log("region.latitude: " + region.latitude);
            }
        
            return(
                <View>
                    <Text style={styles.text}>{item.name} {item.author}</Text>
                </View>
            )
        }
    };
    
    var renderItem1 = ({item}) => {
            i++;
            console.log(i);
            return(
                <View style={styles.radioBox}>
                    <RadioButton 
                        value={item.id}
                        status={ checked === item.id ? 'checked' : 'unchecked' }
                        onPress={() => {setChecked(item.id); selectedBook(); console.log('checked:' + checked);}}
                    />
                    <Text style={styles.text}>{item.name} {item.author}</Text>
                </View>
            )
    };

    var selectedBook = () => {
        books.forEach(b => {
            if(b.id == checked) {
                setRegion({latitude: b.address.latitude, longitude: b.address.longitude});
                console.log("region.latitude: " + region.latitude);  
            }
        })
    }

    var setMarker = () => {
        return(
            <View>
                <Marker coordinate={{latitude: region.latitude, longitude: region.longitude}}></Marker>
                <MapViewDirections
                origin={{latitude: 50.450001, longitude: 30.523333}}
                destination={{latitude: region.latitude, longitude: region.longitude}}
                apikey='AIzaSyAcGy_suXf8rVKTUJEwM9Agb9NwNAS2TVo'
                />
            </View>
        )
    }

    var percentage = () => {
        var valid = 0;
        books.forEach(c => {
            if(c.year <=2012){
                valid++;
            }
        })
        var p = 100 * (valid/books.length);
        return(
            <Text style={styles.title}>Percent of valid books equals: {p}%</Text>
        )
    };

    console.log(books);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>All Books:</Text>
            <FlatList
                data={books} 
                renderItem={renderItem1} 
                keyExtractor={(item) => item.id} 
            />
            <Text style={styles.title}>Valid Books:</Text>
            <FlatList
                data={books} 
                renderItem={renderItem} 
                keyExtractor={(item) => item.id} 
            />
            {percentage()}
            <MapView style={styles.map} provider={PROVIDER_GOOGLE}
                initialRegion={{
                latitude: 50.441744,
                longitude: 30.522649,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                {setMarker()}
                <Marker coordinate={{latitude: 50.450001, 
                longitude: 30.523333}} pinColor="black"></Marker>
                
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    title1: {
        fontSize: 18,
    },
    text: {
        fontSize: 18,
    },
    map: {
      marginTop: 5,
      width: '100%',
      height: '60%',
    },
    search: {
      zIndex: 1,
      marginTop: 5,
      backgroundColor: 'white',
      fontSize: 16,
      height: '100%'
    },
    radioBox: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})
