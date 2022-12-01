import React, { useState } from 'react';
import {Button, View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import Plot from './plot';
import linear from 'linear-solve';
import gauss from 'gaussian-elimination';

const Calculate = (props) => {
    const [xValues, setXValues] = useState([]);
    const [yValues, setYValues] = useState([]);
    const [yValues2, setYValues2] = useState([]);
    const [plotCall, setPlotCall] = useState(false);

    const values = () => {
      console.log("values");

      var xValues = [-100, 100]
      var yValues = [(props.thirdCoef-props.firstCoef*xValues[0])/props.secondCoef, (props.thirdCoef-props.firstCoef*xValues[1])/props.secondCoef];
      var yValues2 = [(props.sixthCoef-props.fourthCoef*xValues[0])/props.fifthCoef, (props.sixthCoef-props.fourthCoef*xValues[1])/props.fifthCoef];

      if(props.a === "three") {
        var yValues3 = [(props.ninethCoef-props.seventhCoef*xValues[0])/props.eigthCoef, (props.ninethCoef-props.seventhCoef*xValues[1])/props.eigthCoef];
        setYValues3(yValues3);
      }

      console.log(xValues);
      console.log(yValues);
      console.log(yValues2);


      setXValues(xValues);
      setYValues(yValues);
      setYValues2(yValues2);

      setPlotCall(true);
    }

    const matrixSolve = () => {
      const mRes = linear.solve(props.matrix, props.result);
      var matrixRes = mRes[0] + "  " + mRes[1]+ "  ";
      if(props.a === "three") { matrixRes += mRes[2]};
        return matrixRes;
    }

    const timeM = () => { 
        var s_time = performance.now()
        matrixSolve();
        var durM = performance.now() - s_time
        return durM;
    }

    const gausssSolve = () => {
      const gRes = gauss(props.gaussianMatrix);
      var gaussRes = gRes[0] + "  " + gRes[1]+ "  ";
      if(props.a === "three") { gaussRes += gRes[2]};
        return gaussRes;
    }

    const timeG = () => { 
        var s_time = performance.now()
        gausssSolve();
        var durG = performance.now() - s_time
        return durG;
    }
  return (
    <View style={styles.header}>
       <Text>Matrix Method: {matrixSolve()}</Text>
        <Text>Matrix Method Time: {timeM()}</Text>
        <Text>Gauss Method: {gausssSolve()}</Text>
        <Text>Gauss Method Time: {timeG()}</Text> 

        <Button style={styles.button} title='Draw a Plot!' onPress={() => values()}></Button>
        {plotCall && props.a === "two"? <Plot xValues={xValues} yValues={yValues} yValues2={yValues2}></Plot> : null} 
        {plotCall && props.a === "three"? null : null} 
        
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Calculate;