import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
  chats: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  appbar: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth: 3,
    marginBottom: 4
  },
  tabIndicator: {
    width: '50%',
    height: 3,
    position: "absolute",
    bottom: 0,
    transition: '200ms',
    borderRadius: 20
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    overflow: 'auto',
  },
  modal: {
    flex: 1,
    padding: 10,
    borderWidth: 3,
    maxHeight: '80vh',
    width: '100%',
    maxWidth: '85vw',
    alignSelf: 'center',
    borderRadius: 10
  },
  modalTitle: {
    borderBottomWidth: 3,
    paddingBottom: 10,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: 500
  },
  input: {
    backgroundColor: 'transparent',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 3,
    marginVertical: 5
  },
  button: {
    borderRadius: 10,
    padding: 5,
    marginVertical: 5
  },
  searchbarContainer: {
    boxSizing: 'border-box',
    marginBottom: 15,
    gap: 10
  },
  searchbar: {
    backgroundColor: "#D8D8D8",
    borderRadius: 10,
    shadowOpacity: 0,
  },
  results: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    gap: 15,
    overflow: 'auto',
  },
});

export default styles