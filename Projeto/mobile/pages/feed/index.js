import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';

export default function Feed({ navigation }) {
    const [busca, setBusca] = useState("");
    const [lista, setLista] = useState([]);

        // listando os estabelecimentos do banco
        useEffect(() => {
            fetch("http://10.87.207.9:8080/establishment", {
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
            <SafeAreaView>
                <LinearGradient colors={["#F51344", "#E50F90"]}>
                    <View style={style.header}>
                        <Image 
                        source={require('../../assets/app/logo.png')}
                        style={{ width: 140, height: 100, top: 3 }}
                        resizeMode="contain"
                        />

                        <TouchableOpacity onPress={() => { navigation.navigate("Notificacao") }}>
                            <Image 
                            source={require('../../assets/app/sino-de-notificacao.png')}
                            style={{ width: 30, height: 30, top: 10 }}
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </SafeAreaView>

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
                        if(item.name.toLowerCase().includes(busca.toLowerCase())) {
                            return( 
                                <TouchableOpacity key={index} style={style.cards} onPress={() => { navigation.navigate("Detalhe", item) }}>
                                    <Image source={{uri: item.image}} style={style.imagecard}/>
                                    <View style={style.textview}> 
                                        <Text style={style.nameestab}>{item.name}</Text>
                                        <View style={style.texts}>
                                            <Image style={{width: 20, height: 20}} source={require('../../assets/app/marcador.png')} />
                                            <Text style={style.location}>{item.location}</Text>
                                        </View>
                                    </View>
                                    <View style={style.mediaaval}>
                                        <Image source={require('../../assets/app/estrela.png')} style={{width: 17, height: 17, }} />
                                        <Text style={style.text}>{item.average_rating}</Text>
                                    </View>
                                </TouchableOpacity> 
                            )
                        }
                    })}
                </View>
            </ScrollView>
        </View>
    )
}