import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#FFF3F3",
        width: "100%",
        height: "100%",
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
        paddingLeft: 15
    },
    trocarFoto: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 150,
        height: 33,
        borderRadius: 6,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        top: 25,
        
    },
    fotoPerfil: {
        width: 110,
        height: 110,
        borderRadius: 60,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        borderColor: "#dedede",
        borderWidth: 1,
    },
    alterarNome: {
        backgroundColor: 'transparent',
        height: 35,
        margin: 15,
        borderRadius: 6,
        borderBottomWidth: 2.5,
        padding: 10,
        top: -20
    },
    alterarBio: {
        backgroundColor: 'transparent',
        height: 35,
        margin: 15,
        borderRadius: 6,
        borderBottomWidth: 2.5,
        padding: 10,
        top: -62
    },
    alterarEmail: {
        backgroundColor: 'transparent',
        height: 35,
        margin: 15,
        borderRadius: 6,
        borderBottomWidth: 2.5,
        padding: 10,
        top: -105
    },
    alterarSenha: {
        backgroundColor: 'transparent',
        height: 35,
        margin: 15,
        borderRadius: 6,
        borderBottomWidth: 2.5,
        padding: 10,
        top: -149
    },
    updatePerfil: {
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,255)',
        position: 'absolute', 
        left: 0,
        right: 0, 
        bottom: 0,
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        width: 320,
        height: 38,
        margin: 35,
        padding: 7,
        alignItems: "center",
        backgroundColor: "#000",
    },
    buttontext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
})