import { View, Text, Image } from 'react-native';

function TabFotos({isFocused}) {
    return(
        <View style={{flex:1, flexDirection:'row', alignItems: 'center', width: 210, justifyContent: 'center'}}>
            <Text style={isFocused ? {color: '#000', fontWeight: 'bold', fontSize: 14} : {color:'#000'}}>Publicações</Text>
        </View>
    )
}

function FotosView() {
    return(
        <View>
            <Text>Publicações View</Text>
        </View>
    )
}

module.exports = {
    TabFotos,
    FotosView
}