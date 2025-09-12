import { useState } from 'react';

import { View, Text, Button, TouchableOpacity} from 'react-native';
 
import styles from './styles'

export default function Exemplo03() {
    
    const [numero,setNumero] = useState(1.000);

    function handleIncrementar(){
       
       setNumero(numero + 1 );
       //console.log(numero);
        
    }
   
   
   
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo03</Text>
            <Button
              onPress={() => {alert('Someone touch the button!!')}}

              title="Wacht"
              color="#777"
              accessibilityLabel="Alert Button"
              />
            
            
            <Text style={styles.txt}>{numero}</Text>
        <TouchableOpacity 
        style={styles.botao}
        onPress={() => handleIncrementar()}
         >   
            <Text  style={styles.txtBotao}> Como conservar PS2 </Text>
        </TouchableOpacity> </View>
    );
}