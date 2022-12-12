import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExecutorData from './components/executorData';
import Automobile from './components/automobile';

export default function App() {
  return (
    <View style={styles.container}>
      <ExecutorData></ExecutorData>
      <Automobile></Automobile>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
