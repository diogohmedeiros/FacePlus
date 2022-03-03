import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F51344",
        width: "100%",
    },
    inputs: {
        // borderWidth: 1.5,
        // borderColor: "#F51344",
        borderRadius: 6,
        margin: 7,
        padding: 7,
        width: 320,
        backgroundColor: "#fff",
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
        margin: 5,
        padding: 7,
        alignItems: "center",
        backgroundColor: "#000",
    },
    buttontext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    cad: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45,
    },
    text: {
        fontSize: 18,
        color: "#fff",
    },
    text2: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    image: {
        top: -50,
        width: 190,
        height: 49
    },
    view: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    alignmargin: {
        top: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})