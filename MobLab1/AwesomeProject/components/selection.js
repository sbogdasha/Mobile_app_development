import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import { RadioButton } from 'react-native-paper';
import TwoEquationsForm from './twoEquationsForm';
import ThreeEquationsForm from './threeEquationsForm';


const Selection = () => {
  const [selCall, setSelCall] = useState(false);

  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
        <Text>Select number of Equations in system</Text>
        
        <View style={styles.radioBox}>
          <RadioButton 
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
          />
          <Text> 2 equations system</Text>
      </View>
      <View style={styles.radioBox}>
        <RadioButton
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
        />
        <Text> 3 equations system</Text>
      </View>
      <Button style={styles.button} title='Select coeficients!' onPress={() => setSelCall(true)}></Button>
        {selCall && checked === "first" ? <TwoEquationsForm></TwoEquationsForm> : null} 
        {selCall && checked === "second"?  <ThreeEquationsForm></ThreeEquationsForm>: null} 
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#add8e6",
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioBox: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Selection;