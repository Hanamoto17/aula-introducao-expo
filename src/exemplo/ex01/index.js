import { View, Text } from 'react-native';
 
import styles from './styles'

export default function Exemplo01() {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 1</Text>
            <Text style={styles.txt}>Introduçao react native com expo</Text>
        </View>
    );
}