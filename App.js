import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Exemplo01 from './src/exemplo/ex01';

import Atividade01 from './src/atividade/atv01';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade01/>
      <StatusBar style="auto" />
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
