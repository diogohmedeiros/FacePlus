import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    perfil: {
        backgroundColor: '#FFF3F3',
        height: '41%',
        alignItems: "center",
    },
    avaliacoes: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 110,
        padding: 5,
        borderRadius: 7,
        backgroundColor: "#fff",
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        top: -45,
        left: 40
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
        width: "100%",
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
        left: 10
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    textos: {
        justifyContent: 'center',
        right: 5,
        height: 80,
        margin: 10,
        padding: 10,
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
    nameestab: {
        fontSize: 18,
        fontWeight: "bold",
        right: 27
    },
    listTab: {
        flex: 1,
        //padding: 20,
        flexDirection: 'row',
        backgroundColor: "#fff"
    },
    textTab: {
        fontSize: 21
    },
    btnTab: {
        flexDirection: 'row',
        width: Dimensions.get('window').width / 2,
        borderWidth: 0.5,
        padding: 10,
        justifyContent: 'center'
    },
    btnActive: {
        backgroundColor: '#f5f5f5'
    }
})