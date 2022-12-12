import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {LineChart} from 'npm i react-native-chart-kit';
import "../node_modules/react-native-svg";

const Plot = (props) => {
    
  return (
    <View style={styles.plotContainer}>
      <LineChart
        data={{
          labels: props.xValues, 
          datasets: [
            {
              data: props.yValues, 
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            },
            {
                data: props.yValues2, 
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              },
          ],
          
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        style={styles.chart}
        chartConfig={{
          backgroundColor: '#db592e',
          backgroundGradientFrom: '#db902e',
          backgroundGradientTo: '#db592e',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 255) => '#000',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    plotContainer:{
    }
});

export default Plot;