import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
    },
    header: {
        height:85,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 15,
        paddingLeft: 15
    },
    best: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        height: 35,
        marginBottom: 2
    },
    bestText: {
        fontSize: 15,
        color: "#E50F90",
        fontWeight: "bold",
        padding: 5,
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        width: 320,
        margin: 20,
        padding: 5,
        alignItems: "center",
        backgroundColor: "#000",
    },
    buttontext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    createpubli: {
        height: 75,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.70)',
        position: 'absolute', 
        left: 0,
        right: 0, 
        bottom: 0
    },
    card: {
        marginBottom: 10,
        margin: 11,
        width: 390,
        borderRadius: 10,
        backgroundColor: "#F3F5F8"
    },
    textss: {
        flexDirection: 'row',
        margin: 10,
        marginBottom: 7,
        justifyContent: 'space-between',
    }
})