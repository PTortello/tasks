import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF'
  },
  header: {
    fontFamily: global.fontFamily,
    color: global.colors.secondary,
    backgroundColor: global.colors.today,
    textAlign: 'center',
    fontSize: 18,
    padding: 15
  },
  input: {
    fontFamily: global.fontFamily,
    height: 40,
    margin: 15,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6
  }
})

export default style;
