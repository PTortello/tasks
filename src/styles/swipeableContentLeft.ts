import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1
  },
  icon: {
    marginLeft: 10
  },
  label: {
    fontFamily: global.fontFamily,
    color: '#FFFFFF',
    fontSize: 20,
    margin: 10
  }
})

export default style;
