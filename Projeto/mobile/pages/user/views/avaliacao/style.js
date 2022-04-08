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
        right: 20
    },
    viewevaluation: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textcomment: {
        top: 5,
        padding: 7,
        fontSize: 15,
        left: 15
    },
    nota: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        left: 11
    },
    vieweva: {
        flexDirection: 'row',
        borderRadius: 7,
        width: 53,
        padding: 3,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
    }
})