import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    maxHeight: '100%',
    boxSizing: 'border-box'
  },
  appbar: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  headerButton: {
    flex: 1,
    width: 'fit-content',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bolder',
    paddingBottom: 15,
    fontStyle: 'italic'
  },
  badge: {
    minWidth: 10,
    height: 10,
    position: 'absolute',
    margin: 5,
  }
});

export default styles