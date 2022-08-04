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
    modal: {
        borderWidth: 3,
        maxHeight: '80vh',
        width: '100%',
        maxWidth: '85vw',
        alignSelf: 'center',
        borderRadius: 10
    },
    post: {
        flex: 1,
        margin: 1,
        aspectRatio: 1
    },
});

export default styles