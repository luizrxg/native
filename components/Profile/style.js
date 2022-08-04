import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    width: '100%',
    flexDirection: 'column'
  },
  profileHeader: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  avatar: {
    borderWidth: 2,
  },
  profileInnerHeader: {
    padding: 10,
    boxSizing: 'border-box',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 10,
  },
  infosContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  info: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 7
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bolder',
  },
  text: {
    width: '100%',
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  button: {
    padding: 2,
    width: '48%',
    borderWidth: 2
  },
  buttonContainer: {
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  post: {
    flex: 1,
    margin: 1,
    aspectRatio: 1
  },
  modal: {
    borderWidth: 3,
    maxHeight: '80vh',
    width: '100%',
    maxWidth: '85vw',
    alignSelf: 'center',
    borderRadius: 10
  }
});

export default styles