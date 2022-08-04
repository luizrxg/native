import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  subcontent: {
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    justifyContent: 'flex-end',
    borderTopWidth: 1,
  },
  input: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 3,
  },
  button: {
    borderRadius: 10,
  },
  card: {
    marginVertical: 'auto',
    marginHorizontal: 10,
    borderWidth: 2,
    borderRadius: 10
  },
  cardContainer: {
    flex: 1,
    overflow: 'auto',
    paddingVertical: 10
  }
});

export default styles