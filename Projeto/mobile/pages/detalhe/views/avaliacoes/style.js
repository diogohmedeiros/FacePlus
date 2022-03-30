import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    cards: {
        margin: 10,
        width: 390,
        borderRadius: 10,
        backgroundColor: "#F3F5F8",
        padding: 10,
        marginBottom: 0
    },
    cardavatar: {
        width: 30, 
        height: 30, 
        borderRadius: 50,
        padding: 7,
        right: 5
    },
    viewevaluation: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textcomment: {
        top: 5,
        padding: 7,
        fontSize: 15
    },
})