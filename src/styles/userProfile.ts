import { StyleSheet } from "react-native";
import global from "./global";

const style = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#DDDDDD'
  },
  text: {
    fontFamily: global.fontFamily
  },
  title: {
    color: global.colors.menuLabel,
    fontSize: 30,
    padding: 10,
    paddingBottom: 0
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    borderColor: '#DDDDDD',
    borderWidth: 2,
    borderRadius: 30,
    margin: 10,
    marginBottom: 5
  },
  name: {
    fontSize: 20,
    color: global.colors.mainText
  },
  email: {
    fontSize: 15,
    color: global.colors.subText
  }
})

export default style;
