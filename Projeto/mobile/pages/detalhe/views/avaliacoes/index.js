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

function AvaliacaoView() {
    const [lista, setLista] = useState([]);

    // useEffect(() => {
    //     fetch("http://10.87.207.9:8080/establishment", {
    //         "method": "GET",
    //         "headers": {
    //             "Content-Type":"application/json"
    //         }
    //     })
    //     .then(resp => { return resp.json() })
    //     .then(data => { setLista(data) })
    //     .catch(err => {
    //     })
    // }, [])

    return(
        <View style={style.container}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View>
                        {lista.map((item, index) => {
                            return(
                                <View style={style.cards} key={index}>
                                    <View style={style.viewevaluation}>
                                        <Image style={style.cardavatar} source={{uri: item.user.avatar}}/>
                                        <Text style={{paddingLeft: 8, fontWeight: 'bold', fontSize: 15, right: 25}}>{item.user.username}</Text>
                                        <Text style={style.nota}>{item.note}</Text>
                                    </View>
                                    <Text style={style.textcomment}>{item.text}</Text>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

module.exports = {
    TabAvaliacao,
    AvaliacaoView
}