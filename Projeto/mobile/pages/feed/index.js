import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import style from './style';

export default function Feed({ navigation }) {
    const [busca, setBusca] = useState("");
    const [lista, setLista] = useState([]);

        // listando os estabelecimentos do banco
        useEffect(() => {
            fetch("http://10.87.207.31:8080/estabelecimentos", {
                "method": "GET",
                "headers": {
                    "Content-Type":"application/json"
                }
            })
            .then(resp => { return resp.json() })
            .then(data => { setLista(data) })
            .catch(err => {
            })
        }, [])

    
    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.colorbusca}>
                    <TextInput value={busca} onChangeText={(t) => setBusca(t)} placeholder="Buscar..." style={style.search} />
                    <Image source={require('../../assets/app/procurar.png')} style={style.searchimage}/>
                </View>

                <View style={style.best}>
                    <Image source={require('../../assets/app/estrela.png')} style={style.imageWid} />
                    <Text style={style.bestText}>MELHORES AVALIAÇÕES</Text>
                </View>

                <View>
                    {lista.map((item, index) => {
                        if(item.estabelecimento.toLowerCase().includes(busca.toLowerCase())) {
                            return( 
                                <TouchableOpacity key={index} style={style.cards} onPress={() => { navigation.navigate("Detalhe", item) }}>
                                    {/* <Image source={item.imagem} style={style.imagecard}/> */}
                                    <View style={style.imagecard}></View>
                                    <Text style={style.nameestab}>{item.estabelecimento}</Text>
                                    <Text style={style.mediaaval}>{item.avaliacao_media}</Text>
                                </TouchableOpacity> 
                            )
                        }
                    })}
                </View>
            </ScrollView>
        </View>
    )
}