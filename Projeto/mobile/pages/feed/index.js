import React, { useState } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import style from './style';

export default function Feed() {
    const [busca, setBusca] = useState("");

    return (
        <View style={style.container}>
            <View style={style.colorbusca}>
                <TextInput value={busca} onChangeText={setBusca} placeholder="Buscar..." style={style.search} />
            </View>

            <View style={style.best}>
                <Image source={require('../../assets/app/estrela.png')} style={style.imageWid} />
                <Text style={style.bestText}>MELHORES AVALIAÇÕES</Text>
            </View>

            <View style={style.cards}>
                
            </View>
        </View>
    )
}