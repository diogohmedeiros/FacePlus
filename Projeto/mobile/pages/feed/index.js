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
        }, [lista])


    // const buscar = (t) => {
    //     if(t) {
    //         const newData = lista.filter(
    //             function(item) {
    //                 if(item.estabelecimento) {
    //                     const itemData = item.estabelecimento.toLowerCase();
    //                     const textData = t.toLowerCase();
    //                     return itemData.indexOf(textData) > -1;
    //                 }
    //             });
    //             setBusca(newData);
    //         }else {
    //             setBusca(lista);
    //         }
    //     }  

        // filtrando pelo estabelecimento
        useEffect(() => {
            if(busca === '') {
                setLista(lista);
            }else {
                setLista(
                    lista.filter(
                        (item) => 
                            item.estabelecimento.toLowerCase().indexOf(busca.toLowerCase()) > -1
                        )
                    );
                }
            }, [busca]);
    
    return (
        <View style={style.container}>
            <ScrollView>
                <View style={style.colorbusca}>
                    <TextInput value={busca} onChangeText={(t) => setBusca(t)} placeholder="Buscar..." style={style.search} />
                </View>

                <View style={style.best}>
                    <Image source={require('../../assets/app/estrela.png')} style={style.imageWid} />
                    <Text style={style.bestText}>MELHORES AVALIAÇÕES</Text>
                </View>

                <View>
                    {lista.map((item, index) => 
                        <TouchableOpacity key={index} style={style.cards} style={style.cards} onPress={() => { navigation.navigate("Detalhes", item) }}>
                            <Text style={style.nameestab}>{item.estabelecimento}</Text>
                            <Text style={style.mediaaval}>{item.avaliacao_media}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}