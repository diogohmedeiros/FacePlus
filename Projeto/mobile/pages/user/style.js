import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    perfil: {
        backgroundColor: '#FFF3F3',
        alignItems: "center",
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
        margin: 35,
        padding: 7,
        alignItems: "center",
        backgroundColor: "#000",
        top: 215,
        position: "absolute",
    },
    buttontext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
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
    textos: {
        justifyContent: 'center',
        right: 15,
        height: 80,
        margin: 10,
        padding: 10,
    },
    configuracoes: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 138,
        padding: 5,
        borderRadius: 10,
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
    header: {
        height:75,
        flexDirection: 'row',
        paddingLeft: 10,
        top: 30
    },
    textheader: {
        fontWeight: "bold",
        fontSize: 22,
        paddingLeft: 15,
    },
    bio: {

    }
})