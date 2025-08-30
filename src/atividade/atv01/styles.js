import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: '#D3D3D3',
             flex: 1,
             alignItems: 'center',
             justifyContent: 'center',
            
            },
           titulo:{
            fontSize: RFPercentage(5),
            fontWeight: 'bold',
            color:'#777',
         },
           txt: {
            fontSize: 25,
            textAlign: 'center',
        }
    }

);

export default styles; 