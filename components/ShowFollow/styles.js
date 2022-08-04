import {StyleSheet} from "react-native"

const styles = StyleSheet.create({
    header: {
        padding: 10,
        boxSizing: 'border-box'
    },
    searchbar: {
        backgroundColor: "#D8D8D8",
        borderRadius: 10,
        shadowOpacity: 0,
    },
    page: {
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
});

export default styles