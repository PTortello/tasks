import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  text: {
    fontFamily: global.fontFamily,
    color: global.colors.secondary,
    marginLeft: 20,
  },
  title: {
    fontSize: 50,
    marginBottom: 20
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30
  }
})

export default style;
