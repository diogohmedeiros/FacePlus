import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    textheader: {
        fontWeight: "bold",
        fontSize: 22,
        paddingLeft: 15
    },
    header: {
        height:75,
        flexDirection: 'row',
        paddingLeft: 10,
        top: 30
    },
    perfil: {
        backgroundColor: '#fff9f9',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 30,
    },
    textBox: {
        backgroundColor: '#fff',
        width: 350,
        height: 130,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        padding: 10,
    },
    avaliar: {
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dedede",
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        margin: 30
    },
    evapubli: {
        height: 75,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.90)',
        left: 0,
        right: 0, 
        bottom: -100,
        justifyContent: 'center',
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        width: 320,
        margin: 7,
        padding: 7,
        alignItems: "center",
        backgroundColor: "#000",
    },
    buttontext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    },
    evaluation: {
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 5,
        right: 12
    },
    picker: {
        width: 100, 
        height: 30,
        textAlign: 'center',
    }
})