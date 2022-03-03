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
        backgroundColor: "#e5e5e5",
        width: '90%',
        height: 85,
        display: "flex",
        flexDirection: "column",
        borderRadius: 6,
        padding: 10,
        left: 18
    }
})