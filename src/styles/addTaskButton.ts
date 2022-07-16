import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: global.colors.today,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default style;
