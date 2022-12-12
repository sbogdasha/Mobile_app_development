import linear from 'linear-solve';
import gauss from 'gaussian-elimination';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import Calculate from './calculate';


export default function threeEquationsForm() {

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
    
    var [secondCoef3, setValueTwo3] = useState('');

    var [thirdCoef, setValueThree] = useState('');

    var [fourthCoef, setValueFour] = useState('');

    var [fifthCoef, setValueFive] = useState('');
    var [fifthCoef3, setValueFive3] = useState('');

    var [sixthCoef, setValueSix] = useState('');

    var [seventhCoef, setValueSeven] = useState('');

    var [eighthCoef, setValueEight] = useState('');
    var [eighthCoef3, setValueEight3] = useState('');

    var [ninethCoef, setValueNine] = useState('');
    
    var onChangeOne = (firstCoef) => {
        setValueOne(Number(firstCoef)); 
    };

    var onChangeTwo = (secondCoef) => {
        setValueTwo(Number(secondCoef));
    };

    var onChangeThree = (thirdCoef) => {
        setValueThree(Number(thirdCoef));
    };

    var onChangeTwo3 = (secondCoef3) => {
        setValueTwo3(Number(secondCoef3));
    };

    var onChangeFour = (fourthCoef) => {
        setValueFour(Number(fourthCoef));
    };

    var onChangeFive = (fifthCoef) => {
        setValueFive(Number(fifthCoef));
    };
    var onChangeFive3 = (fifthCoef3) => {
        setValueFive3(Number(fifthCoef3));
    };

    var onChangeSix = (sixthCoef) => {
        setValueSix(Number(sixthCoef));
    };

    var onChangeSeven = (seventhCoef) => {
        setValueSeven(Number(seventhCoef));
    };

    var onChangeEight = (eighthCoef) => {
        setValueEight(Number(eighthCoef));
    };

    var onChangeEight3 = (eighthCoef3) => {
        setValueEight3(Number(eighthCoef3));
    };

    var onChangeNine = (ninethCoef) => {
        setValueNine(Number(ninethCoef));
    };

    var matrix = [
        [firstCoef, secondCoef, secondCoef3],
        [fourthCoef, fifthCoef, fifthCoef3],
        [seventhCoef, eighthCoef, eighthCoef3],
    ]

    var result = [
        thirdCoef, sixthCoef, ninethCoef
      ];

    var gaussianMatrix = [
        [firstCoef, secondCoef, secondCoef3, thirdCoef],
        [fourthCoef, fifthCoef, fifthCoef3, sixthCoef],
        [seventhCoef, eighthCoef, eighthCoef3, ninethCoef],
    ]
    

    return (
        <View style={styles.equationContainer}>
        <View style={styles.equation}>
            <TextInput style={styles.input} onChangeText={onChangeOne}></TextInput>
            <Text style={styles.x}>x1</Text>
            <TextInput style={styles.input} onChangeText={onChangeTwo}></TextInput>
            <Text style={styles.x}>x2=</Text>
            <TextInput style={styles.input} onChangeText={onChangeTwo3}></TextInput>
            <Text style={styles.x}>x3=</Text>
            <TextInput style={styles.input} onChangeText={onChangeThree}></TextInput>
        </View>
        <View style={styles.equation}>
            <TextInput style={styles.input} onChangeText={onChangeFour}></TextInput>
            <Text style={styles.x}>x1</Text>
            <TextInput style={styles.input} onChangeText={onChangeFive}></TextInput>
            <Text style={styles.x}>x2=</Text>
            <TextInput style={styles.input} onChangeText={onChangeFive3}></TextInput>
            <Text style={styles.x}>x3=</Text>
            <TextInput style={styles.input} onChangeText={onChangeSix}></TextInput>
        </View>
        <View style={styles.equation}>
            <TextInput style={styles.input} onChangeText={onChangeSeven}></TextInput>
            <Text style={styles.x}>x1</Text>
            <TextInput style={styles.input} onChangeText={onChangeEight}></TextInput>
            <Text style={styles.x}>x2=</Text>
            <TextInput style={styles.input} onChangeText={onChangeEight3}></TextInput>
            <Text style={styles.x}>x3=</Text>
            <TextInput style={styles.input} onChangeText={onChangeNine}></TextInput>
        </View>
        <Button color='green'   title='Calculate' onPress={() => setCalcCall(true)}></Button>
        <Button style={styles.button} title='Download coefs!' onPress={() => saveFile(gaussianMatrix)}></Button>
        {calcCall ? <Calculate a={"three"} matrix = {matrix} result = {result} gaussianMatrix = {gaussianMatrix} firstCoef = {firstCoef} secondCoef = {secondCoef} thirdCoef = {thirdCoef} fourthCoef = {fourthCoef} fifthCoef = {fifthCoef} sixthCoef = {sixthCoef} seventhCoef = {seventhCoef} eighthCoef = {eighthCoef} ninethCoef = {ninethCoef}/> : null}

        
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
