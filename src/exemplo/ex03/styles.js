import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#ff0',
             flex: 1,
             alignItems: 'center',
             justifyContent: 'center',
        },
           titulo:{
            fontSize: RFPercentage(5),
            fontWeight: 'Verdana',
            color:'#777',
        },
           txt: {
            fontSize: RFPercentage(2.5),
        },
           botao:{
            backgroundColor: '#777',
            width: '60%',
            borderRadius: RFPercentage(1),
            padding:RFPercentage(1),
            alignItems:'center',
        },
           txtBotao:{
           color: '#ff0',
           fontSize:RFPercentage(2),

             
        },
    }

);

export default styles; 