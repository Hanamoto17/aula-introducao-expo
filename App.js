import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import  constants from 'expo-constants';

import Exemplo01 from './src/exemplo/ex01';
import Exemplo02 from './src/exemplo/ex02';

import Atividade01 from './src/atividade/atv01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo02/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    // alignItems: 'center',
    // justifyContent: 'center',
     padding: 10,
    },
});
