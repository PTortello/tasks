import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  title: {
    fontFamily: global.fontFamily,
    color: global.colors.secondary,
    fontSize: 70,
    marginBottom: 10
  },
  subtitle: {
    fontFamily: global.fontFamily,
    color: global.colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  input: {
    marginVertical: 5,
    backgroundColor: '#FFFFFF',
    padding: 10
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    width: '90%',
  },
  button: {
    backgroundColor: '#008800',
    marginTop: 5,
    padding: 10,
    alignItems: 'center'
  },
  switchButton: {
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  switchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  buttonText: {
    fontFamily: global.fontFamily,
    color: '#FFFFFF',
    fontSize: 20
  }
})

export default style;
