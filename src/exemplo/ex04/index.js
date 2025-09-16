import { View, Text, TextInput, TouchableOpacity } from 'react-native';
 
import styles from './styles'
import { use, useState } from 'react';

export default function Exemplo04() {
    
   const [texto,setTexto] = useState('')
   const [txt2,setTxt2] = useState("VALOR INICIAL");
  
  
  return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>
           
           <TextInput
           placeholder="texto de fundo"
           keyboardType="visible-password"
           //editable={false}
           //multiline
           //numbersOFlines={4}
           maxLength={7}
           //secureTextEntry
           style={styles.Input}
           
           />
           
           <Text style={styles.Txt}>{txt2}</Text>
           <TextInput
             value={txt2}
             keyboardType='ascii-capable'
             style={styles.Input}
             onChangeText={setTxt2}
             placeholder='digite sua mensagem'
           />
             <TouchableOpacity
              style={styles.botao}
              onPress={() => {}}
             
            >

              <Text style={styles.txtBotao}>Exibir Texto</Text>
            </TouchableOpacity>
             
             </View>
    );
}