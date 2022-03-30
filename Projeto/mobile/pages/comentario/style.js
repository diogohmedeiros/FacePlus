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
        paddingLeft: 10,
        top: 37
    },
    textheader: {
        fontWeight: "bold",
        fontSize: 22,
        paddingLeft: 15
    },
    boxinput: {
        height: 60,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    textinput: {
        borderWidth: 1,
        width: 280,
        height: 35,
        borderRadius: 8,
        padding: 7,
        right: 20,
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 10,  
        elevation: 10
    },
    cards: {
        margin: 10,
        width: 390,
        borderRadius: 10,
        backgroundColor: "#F3F5F8",
        padding: 10,
        marginBottom: 0
    },
    cardavatar: {
        backgroundColor: '#e5e5e5', 
        width: 30, 
        height: 30, 
        borderRadius: 50,
        padding: 7,
        right: 5
    },
    viewcomment: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textcomment: {
        top: 5,
        padding: 7,
        fontSize: 15
    },
    commentcreated: {
        
    }
})