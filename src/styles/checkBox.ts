import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  check: {
    height: 25,
    width: 25,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pending: {
    borderWidth: 1,
    borderColor: '#555555'
  },
  done: {
    backgroundColor: '#4D7031'
  }
})

export default style;
