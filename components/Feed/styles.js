import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    gap: 10,
    overflow: 'auto',
  },
  header: {
    padding: 5
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

export default styles