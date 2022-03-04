import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
    },
    search: {
        width: "90%",
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 6,
        margin: 20
    },
    colorbusca: {
        width: "100%",
        height: "12%",
        backgroundColor: "#FBEAEA",
    },
    best: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        height: 50
    },
    bestText: {
        fontSize: 15,
        color: "#E50F90",
        fontWeight: "bold",
        padding: 8,
    },
    imageWid: {
        width: 25,
        height: 25
    },
    cards: {
        backgroundColor: "#F3F5F8",
        width: '90%',
        height: 85,
        justifyContent: 'space-around',
        borderRadius: 6,
        left: 18,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        margin: 4
    },
    // imagecard: {
    //     width: 35,
    //     height: 35,
    // },
    nameestab: {
        fontSize: 18,
        fontWeight: "bold",
    },
    mediaaval: {
        height: 25,
        width: 50,
        borderRadius: 8,
        textAlign: "center",
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    }
})