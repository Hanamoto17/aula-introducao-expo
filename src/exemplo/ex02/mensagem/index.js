import { view, text } from 'react-native';

import styles from '.styles';

function Mensagem ({titulo, children}) {
    return(
        <view style={styles.container}>
            <text style={styles.titulo}>{titulo}</text>
            <text style={styles.texto}>{children}</text>
        </view>
    );
}

export default Mensagem;