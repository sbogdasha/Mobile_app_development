import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Selection from './components/selection';
import TwoEquationsForm from './components/twoEquationsForm';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header></Header>
      <Selection></Selection>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
  },
});
