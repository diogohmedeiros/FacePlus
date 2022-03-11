import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function User({ navigation }) {

    const [perfil, setPerfil] = useState("");

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                const data = await AsyncStorage.getItem('userdata');
                setPerfil(JSON.parse(data));
            } catch (error) {
            // Error retrieving data
            }
        };
        _retrieveData();
    }, [])

    return (
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
                        
                        <Text style={style.textheader}>Meu Perfil</Text>
                        </View>
                </LinearGradient>
            </SafeAreaView>

            <View style={style.perfil}>
                <View style={style.view}>
                    <Image source={{uri: perfil.avatar}} style={style.avatar} />
                    <View style={style.textos}>
                        <Text style={style.text}>{perfil.username}</Text>
                        <Text style={style.text}>{perfil.email}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate("Configuracao") }} style={style.configuracoes}>
                    <Image source={require('../../assets/app/definicoes.png')} style={style.def}/>
                    <Text style={style.textconf}>Configurações</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate("Publicacao") }} style={[style.button, style.boxWithShadow]}>
                    <Text style={style.buttontext}>Publicar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}