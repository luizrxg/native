import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 'fit-content',
    },
    logoText: {
        fontSize: 50,
        fontWeight: 'bolder',
        paddingBottom: 15,
        fontStyle: 'italic'
    },
    subcontent: {
        width: '100%',
        flexDirection: 'column',
        gap: 10,
        padding: 10,
        justifyContent: 'flex-end',
    },
    login: {
      fontSize: 30,
      fontWeight: 'bolder',
      paddingVertical: 15,
      marginBottom: 15,
      alignSelf: 'center',
      borderBottomWidth: 1,
      width: '98%',
      textAlign: 'center'
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
})

export default styles