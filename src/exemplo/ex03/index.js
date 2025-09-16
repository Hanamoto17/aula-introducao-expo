import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './styles';

export default function Exemplo03() {
  const [numero, setNumero] = useState(0);

  function handleIncrementar() {
    setNumero(numero + 1);
  }

  function handleDiminuir() {
    setNumero(numero - 1);
  }

  function handleResetar() {
    setNumero(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo03</Text>
      <Text style={styles.numero}>{numero}</Text>

      {/* Botões lado a lado */}
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <TouchableOpacity style={styles.botao} onPress={handleDiminuir}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={handleIncrementar}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de reset */}
      <TouchableOpacity style={[styles.botao, { backgroundColor: 'red', marginTop: 10 }]} onPress={handleResetar}>
        <Text style={styles.textoBotao}>Como conservar seu PS2 ZERADO!</Text>
      </TouchableOpacity>
    </View>
  );
}
