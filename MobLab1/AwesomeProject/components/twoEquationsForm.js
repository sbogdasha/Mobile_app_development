import linear from 'linear-solve';
import gauss from 'gaussian-elimination';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Calculate from './calculate';


export default function twoEquationsForm() {

    const saveFile = async (gaussianMatrix) => {
        const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
        if (status === "granted") {
            let fileUri = FileSystem.documentDirectory + "coefs.txt";
            await FileSystem.writeAsStringAsync(fileUri, gaussianMatrix, { encoding: FileSystem.EncodingType.UTF8 });
            const asset = await MediaLibrary.createAssetAsync(fileUri)
            await MediaLibrary.createAlbumAsync("Download", asset, false)
        }
      }

    const [calcCall, setCalcCall] = useState(false);

    var [firstCoef, setValueOne] = useState('');

    var [secondCoef, setValueTwo] = useState('');

    var [thirdCoef, setValueThree] = useState('');

    var [fourthCoef, setValueFour] = useState('');

    var [fifthCoef, setValueFive] = useState('');

    var [sixthCoef, setValueSix] = useState('');
    
    var onChangeOne = (firstCoef) => {
        setValueOne(Number(firstCoef)); 
    };

    var onChangeTwo = (secondCoef) => {
        setValueTwo(Number(secondCoef));
    };

    var onChangeThree = (thirdCoef) => {
        setValueThree(Number(thirdCoef));
    };

    var onChangeFour = (fourthCoef) => {
        setValueFour(Number(fourthCoef));
    };

    var onChangeFive = (fifthCoef) => {
        setValueFive(Number(fifthCoef));
    };

    var onChangeSix = (sixthCoef) => {
        setValueSix(Number(sixthCoef));
    };

    var matrix = [
        [firstCoef, secondCoef],
        [fourthCoef, fifthCoef],
    ]

    var result = [
        thirdCoef, sixthCoef
      ];

    var gaussianMatrix = [
        [firstCoef, secondCoef, thirdCoef],
        [fourthCoef, fifthCoef, sixthCoef]
    ]
    

    return (
        <View style={styles.equationContainer}>
        <View style={styles.equation}>
            <TextInput style={styles.input} onChangeText={onChangeOne}></TextInput>
            <Text style={styles.x}>x1</Text>
            <TextInput style={styles.input} onChangeText={onChangeTwo}></TextInput>
            <Text style={styles.x}>x2=</Text>
            <TextInput style={styles.input} onChangeText={onChangeThree}></TextInput>
        </View>
        <View style={styles.equation}>
            <TextInput style={styles.input} onChangeText={onChangeFour}></TextInput>
            <Text style={styles.x}>x1</Text>
            <TextInput style={styles.input} onChangeText={onChangeFive}></TextInput>
            <Text style={styles.x}>x2=</Text>
            <TextInput style={styles.input} onChangeText={onChangeSix}></TextInput>
        </View>
        <Button color='green'   title='Calculate' onPress={() => setCalcCall(true)}></Button>
        <Button style={styles.button} title='Download coefs!' onPress={() => saveFile(gaussianMatrix)}></Button>
        {calcCall ? <Calculate a = {"two"} matrix = {matrix} result = {result} gaussianMatrix = {gaussianMatrix} firstCoef = {firstCoef} secondCoef = {secondCoef} thirdCoef = {thirdCoef} fourthCoef = {fourthCoef} fifthCoef = {fifthCoef} sixthCoef = {sixthCoef}/> : null}

        
    </View> 
)};

const styles = StyleSheet.create({
    equationContainer: {
        width: "100%",
        color: 'black',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    equation: {
        marginHorizontal: '20%',
        paddingLeft: 40,
        paddingRight: 20,
        flexDirection: 'row'
    },
    input: {
        backgroundColor: '#fff',
        borderBottomWidth:1,
        borderColor: '#000',
        width: 35,
        height: 30
    },
    x:{
        fontSize:18,
        margin: 4,
        paddingRight: 5,
        flexDirection: 'row',
    }
});
