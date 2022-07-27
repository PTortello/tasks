import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  container: {
    backgroundColor: global.colors.today,
    height: 48,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    marginHorizontal: 100
  },
  icon: {
    marginLeft: 15
  },
  label: {
    flexGrow: 1,
    textAlign: 'center',
    fontFamily: global.fontFamily,
    color: global.colors.secondary
  }
})

export default style;
