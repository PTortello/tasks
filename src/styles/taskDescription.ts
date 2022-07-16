import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  text: {
    fontFamily: global.fontFamily
  },
  mainText: {
    color: global.colors.mainText,
    fontSize: 15
  },
  subText: {
    color: global.colors.subText,
    fontSize: 12
  },
  done: {
    textDecorationLine: 'line-through'
  }
})

export default style;
