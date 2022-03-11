import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    perfil: {
        backgroundColor: '#FBEAEA',
        height: '45%',
        alignItems: "center",
    },
    avaliacoes: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 100,
        padding: 5,
        borderRadius: 7,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        top: -48,
        left: 25
    },
    textconf: {
        fontWeight: "bold",
    },
    def: {
        width: 20,
        height: 20
    },
    view: {
        display: "flex",
        flexDirection: "row",
        margin: 30,
        justifyContent: "space-around",
        width: "100%"
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 60,
        borderColor: "#dedede",
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textos: {
        justifyContent: 'center',
        right: 40,
        height: 80,
        margin: 10,
        padding: 10,
    },
    header: {
        height:85,
        flexDirection: 'row',
        paddingLeft: 10,
        top: 37
    },
    textheader: {
        fontWeight: "bold",
        fontSize: 22,
        paddingLeft: 15
    },
    nameestab: {
        fontSize: 18,
        fontWeight: "bold",
        right: 27
    },
})