import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#777',
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  numero: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
