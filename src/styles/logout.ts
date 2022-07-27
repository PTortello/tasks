import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    width: 100,
    paddingVertical: 5,
    marginBottom: 5
  },
  icon: {
    marginLeft: 15
  },
  label: {
    fontFamily: global.fontFamily,
    color: global.colors.menuLabel,
    fontSize: 18,
    marginLeft: 5
  }
})

export default style;
