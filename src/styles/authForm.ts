import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    width: '90%',
  },
  title: {
    fontFamily: global.fontFamily,
    color: global.colors.secondary,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15
  },
  button: {
    backgroundColor: '#008800',
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5
  },
  buttonText: {
    fontFamily: global.fontFamily,
    fontSize: 20,
    color: '#FFFFFF'
  },
  switchButton: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  switchButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
})

export default style;
