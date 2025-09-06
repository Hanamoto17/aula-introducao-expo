import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
    container: {
        backgroundColor: '#fff',
        padding:8,
        flex: 1,
        alignItems:'center',
        borderRadius: 20,      
},

titulo:{
    fontsize: RFPercentage(3),
    color:'deepskyblue',
    fontWeight:'bold',
    borderWidth: 2,
    bordercolor: 'deepskyblue',
    marginTop: 10,
    marginBottom: 10,
    padding: 8,
    width: '100%',
    height: 80,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius:20,
},

Imagem: {
    //height:RFPercentage(10),
    //width: RFPercentage(28),
    width: '80%',
    resizemode: 'contain',
},
    
}
);

export default styles;