import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import style from './style.js';

function TabAvaliacao({isFocused}) {
    return(
        <View style={{flex:1, flexDirection:'row', alignItems: 'center', width: 210, justifyContent: 'center'}}>
            <Text style={isFocused ? {color: '#000', fontWeight: 'bold'} : {color:'#000'}} >Avaliações</Text>
            <Image style={{width:21, height:21, left: 8}} source={require('../../../../assets/app/estrela.png')} />
        </View>
    )
}

function AvaliacaoView({ evaluations }) {
    const [lista, setLista] = useState([]);

    return(
        <View style={style.container}>
                <ScrollView>
                    <View>
                        {evaluations.map((item, index) => {
                            return(
                                <View style={style.cards} key={index}>
                                    <View style={style.viewevaluation}>
                                        <Image style={style.cardavatar} source={{uri: item.user.avatar}}/>
                                        <Text style={{paddingLeft: 8, fontWeight: 'bold', fontSize: 15, right: 75}}>{item.user.username}</Text>
                                        <View style={style.vieweva}>
                                            <Image source={require('../../../../assets/app/estrela.png')} style={{width: 18, height: 18, left: 3}}/>
                                            <Text style={style.nota}>{item.note}</Text>
                                        </View>
                                    </View>
                                    <Text style={style.textcomment}>{item.text}</Text>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
        </View>
    )
}

module.exports = {
    TabAvaliacao,
    AvaliacaoView
}