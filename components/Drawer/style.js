import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    drawerWrapper: {
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 2000,
        backgroundColor: '#00000050',
        flexDirection: 'row'
    },
    drawer: {
        flex: 1,
        width: '70%',
        flexDirection: 'column',
        borderLeftWidth: 2,
    },
    menuItem: {

    },
    menuItemText: {
        fontWeight: 'bolder',
        fontSize: 20,
    }
});

export default styles