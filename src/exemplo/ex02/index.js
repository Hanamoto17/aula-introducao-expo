import { View, Text, Image } from "react-native";

import styles from '.styles';

import img from '../../../assets/002-1-react-native.png';

import Mensagem from './mensagem';


function Exemplo2 (){
    return(
        <view style={styles.container}>
            <text style={styles.titulo}>Exemplo2</text>
             <image source={img} style={styles.imagem}/>
             
            <Mensagem titulo={'erro'}>Voce nao clicou corretamente</Mensagem>
            <Mensagem titulo={'sucesso'}>Acesso permitido</Mensagem>
            <Mensagem titulo={'aviso'}>O tempo acabou</Mensagem>
        
        </view>
    );
}

export default  Exemplo2;