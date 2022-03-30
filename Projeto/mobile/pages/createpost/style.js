import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFF3F3',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    textinput: {
        backgroundColor: '#fff',
        height: 130,
        margin: 15,
        top: -25,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        padding: 10
    
    },
    desc: {
        margin: 23,
        fontWeight: 'bold',
        fontSize: 17
    },
    desc2: {
        margin: 20,
        fontSize: 17,
        top: -40
    },
    desc3: {
        margin: 23,
        fontSize: 17,
        fontWeight: 'bold',
        top: -65
    },
    localiza: {
        backgroundColor: '#fff',
        height: 35,
        margin: 15,
        borderRadius: 7,
        top: -90,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        padding: 10
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
    },
    button: {
        borderWidth: 1,
        borderRadius: 6,
        width: 320,
        margin: 35,
        marginTop: 0,
        padding: 7,
        alignItems: "center",
        backgroundColor: "#000",
    },
    buttontext: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    selecionarimagem: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "#fff",
        width: 180,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10,
        borderRadius: 7,
        padding: 5,
        margin: 15,
        marginBottom: 0,
        top: -90
    },
    textselect: {
        fontWeight: 'bold',
        fontSize: 15,
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
    preview: {
        width: 350, 
        height: 400,
        margin:29,
        marginTop: -60
    },
    createpubli: {
        alignItems: 'center',
        position: 'absolute', 
        left: 0,
        right: 0, 
        bottom: -23
    }
})