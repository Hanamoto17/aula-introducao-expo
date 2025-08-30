import { View, Text } from 'react-native';
 
import styles from './styles'

export default function Exemplo01() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade01</Text>
            <Text style={styles.titulo}>Prof.Ewerton</Text>
            <Text style={styles.txt}>Eu Vinicius vim e realizei uma atividade de mobile</Text>
            <Text style={styles.txt}>Top sexta 29/08/2025</Text>
        </View>
    );
}