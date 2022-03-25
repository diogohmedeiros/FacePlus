import { View, Text, Image } from 'react-native';

function TabMyAvaliacao({isFocused}) {
    return(
        <View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
            <Text style={isFocused ? {color: '#000', fontWeight: 'bold', fontSize:13.7} : {color:'#000'}} >Minhas Avaliações</Text>
        </View>
    )
}

function MyAvaliacaoView() {
    return(
        <View>
            <Text>Avaliacoes View</Text>
        </View>
    )
}

module.exports = {
    TabMyAvaliacao,
    MyAvaliacaoView
}