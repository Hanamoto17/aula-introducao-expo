import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import  constants from 'expo-constants';

import Exemplo01 from './src/exemplo/ex01';
import Exemplo02 from './src/exemplo/ex02';
import Exemplo03 from './src/exemplo/ex03';
import Exemplo04 from './src/exemplo/ex04';

import Atividade01 from './src/atividade/atv01';

export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo04/>
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
     padding: 15,
     paddingTop: constants.statusBarHeight,
    },
});
