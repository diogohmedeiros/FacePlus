import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';

function TabMyAvaliacao({isFocused}) {
    return(
        <View style={{flex:1, flexDirection:'row', alignItems: 'center', width: 210, justifyContent: 'center'}}>
            <Text style={isFocused ? {color: '#000', fontWeight: 'bold', fontSize:13.8} : {color:'#000'}} >Minhas Avaliações</Text>
        </View>
    )
}

function MyAvaliacaoView() {
    const [lista, setLista] = useState([]);

    useEffect(async () => {
        fetch('http://10.87.207.9:8080/evaluation/user/' + JSON.parse(await AsyncStorage.getItem("userdata")).id, {
            "method": "GET",
            "headers": { 
                "Content-Type": "application/json"
            }
        })
        .then(resp => { 
            return resp.json();
        })
        .then(data => { 
            setLista(data);
        })
    })

    return(
        <View style={style.container}>
            {
                lista.map((item, index) => {
                    return(
                        <View style={style.cards} key={index}>
                            <View style={style.viewevaluation}>
                                <Image style={style.cardavatar} source={{uri: item.user.avatar}}/>
                                <Text style={{paddingLeft: 8, fontWeight: 'bold', fontSize: 15, right: 70}}>{item.user.username}</Text>
                                <View style={style.vieweva}>
                                    <Image source={require('../../../../assets/app/estrela.png')} style={{width: 18, height: 18, left: 3}} />
                                    <Text style={style.nota}>{item.note}</Text>
                                </View>
                            </View>
                            <Text style={style.textcomment}>{item.text}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

module.exports = {
    TabMyAvaliacao,
    MyAvaliacaoView
}