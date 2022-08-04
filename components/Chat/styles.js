import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
  chat: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  messagesContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  messageContainer: {
    width: '100%',
    padding: 10
  },
  name: {
    color: '#F00'
  },
  message: {
    borderRadius: 15,
    fontSize: 16,
    color: '#FFF',
    padding: 10,
    border: 'none',
    flexDirection: 'column',
    maxWidth: '80vw'
  },
  messageLeft: {
    borderTopLeftRadius: 0,
    alignSelf: 'flex-start'
  },
  messageRight: {
    borderTopRightRadius: 0,
    alignSelf: 'flex-end'
  },
  inputContainer: {
    marginTop: 'auto',
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 3
  },
  input: {
    width: '100%',
    borderRadius: 10,
    shadowOpacity: 0,
    padding: 15,
    fontSize: 18
  }
});

export default styles