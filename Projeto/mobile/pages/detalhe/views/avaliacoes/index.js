import { View, Text, Image } from 'react-native';

function TabAvaliacao({isFocused}) {
    return(
        <View style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
            <Text style={isFocused ? {color: '#000', fontWeight: 'bold'} : {color:'#000'}} >Avaliações</Text>
            <Image style={{width:21, height:21, left: 8}} source={require('../../../../assets/app/estrela.png')} />
        </View>
    )
}

function AvaliacaoView() {
    return(
        <View>
            <Text>Avaliacoes View</Text>
        </View>
    )
}

module.exports = {
    TabAvaliacao,
    AvaliacaoView
}