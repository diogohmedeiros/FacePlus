import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TabView, SceneMap } from 'react-native-tab-view';
import style from './style.js';



export default function Detalhe({ navigation, route }) {
    const { id } = route.params;
    const [estabelecimento, setEstabelecimento] = useState("");

    useEffect(() => {
        fetch('http://10.87.207.31:8080/estabelecimentos/' + id, {
            "method": "GET",
            "headers": {
                "Content-Type":"application/json"
            }
        })
        .then(resp => { return resp.json(); })
        .then(data => { setEstabelecimento(data); })
        .catch(err => {
        })
    }, [])

    return(
        <View style={style.container}>
            
            <SafeAreaView>
                <LinearGradient colors={["#F51344", "#E50F90"]}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Feed") }}>
                            <Image 
                            source={require('../../assets/app/voltar.png')}
                            style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>

                        <Text style={style.textheader}>{estabelecimento.estabelecimento}</Text>
                    </View>
                </LinearGradient>
            </SafeAreaView>

        <View style={style.perfil}>
            <View style={style.view}>
                <Image source={{uri: estabelecimento.imagem}} style={style.avatar}/>
                <View style={style.textos}>
                    <Text style={style.text}>{estabelecimento.estabelecimento}</Text>
                    <Text style={style.text}>{estabelecimento.email}</Text>
                </View>
            </View>
            

            <TouchableOpacity onPress={() => {  }} style={style.avaliacoes}>
                <Image source={require('../../assets/app/estrela.png')} style={style.def}/>
                <Text style={style.textconf}>Avaliar</Text>
            </TouchableOpacity>
        </View>
        
        </View>
    )
}