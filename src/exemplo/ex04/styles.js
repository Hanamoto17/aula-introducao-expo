import { StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#777',
  },

  titulo: {
    fontSize: 55,
    fontWeight: 'verdana', 
    marginBottom: 10,
    width: '80%',
  },

  Input: {
    borderColor:'darkblue',
    width:'80%',
    borderRadius:RFPercentage(1.5),
    padding: RFPercentage(1.5),
    fontSize: RFPercentage(2),
    textAlign:'center',
  },

  Txt: {
     fontSize: RFPercentage(2.5),
  },
  
  botao:{
    backgroundColor: 'darkslategrey',
    width: '75%',
    borderRadius: RFPercentage(2),
    padding:RFPercentage(1),
    alignItems:'center',
    justifyContent: 'center',
    margin: RFPercentage(2),
  },
  
  txtBotao:{
    fontSize:RFPercentage(2),
    color: '#fafafa',
  },
}

);

export default styles;
