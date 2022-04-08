import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';

function TabFotos({isFocused}) {
    return(
        <View style={{flex:1, flexDirection:'row', alignItems: 'center', width: 210, justifyContent: 'center'}}>
            <Text style={isFocused ? {color: '#000', fontWeight: 'bold', fontSize: 14} : {color:'#000'}}>Publicações</Text>
        </View>
    )
}

function FotosView({ route }) {
    const [lista, setLista] = useState([]);

    return(
        <View style={style.container}>
            {lista.map((item, index) => {
                return(
                    <View style={style.card} key={index}>
                    <View style={{flexDirection: 'row', alignItems: 'center', margin: 9, marginBottom: 0}}>
                        <Image source={{uri: item.establishment.image}} style={{width: 35, height: 35, backgroundColor:'#000', borderRadius:50}}/>
                        <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>{item.establishment.name}</Text>
                    </View>
                    <View style={style.textss}>
                        <Text style={{paddingLeft: 5, fontSize: 15}}>{item.text}</Text>
                        <View style={{flexDirection: 'row', top: -35}}>
                            <Image source={require('../../../../assets/app/marcador.png')} style={{width: 18, height: 18, right: 3}} />
                            <Text style={{fontWeight: 'bold', paddingRight: 5}}>{item.location}</Text>
                        </View>
                    </View>
                    <Image source={{uri: item.establishment.image}} style={{width: 370, height: 220, margin: 9}}/>
                    <View style={{flexDirection: 'row', margin: 10, top: -8, marginBottom: 0, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', margin: 10, top: -8, marginBottom: 0,}}>
                            <TouchableOpacity>
                                <Image source={require('../../../../assets/app/thumbs-up.png')} style={{width: 32, height: 32}} />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{right: 2}}>
                            <TouchableOpacity onPress={() => {  }}>
                                <Image source={require('../../../../assets/app/menu-pontos-vertical.png')}
                                    style={{width: 23, height: 23, top: 4, justifyContent: 'center'}}
                                />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
                )
            })}
        </View>
    )
}

module.exports = {
    TabFotos,
    FotosView
}