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
        height: 42,
    },
    bestText: {
        fontSize: 15,
        color: "#E50F90",
        fontWeight: "bold",
        padding: 8,
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
        padding: 7,
        alignItems: "center",
        backgroundColor: "#000",
    },
    buttontext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    createpubli: {
        top: 497,
        height: 81,
        alignItems: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.3)"
    }
})