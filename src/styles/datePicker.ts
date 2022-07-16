import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  button: {
    fontFamily: global.fontFamily,
    color: global.colors.secondary,
    backgroundColor: global.colors.today,
    height: 35,
    borderRadius: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginHorizontal: 100,
  }  
})

export default style;
