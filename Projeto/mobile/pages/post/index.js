import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, SafeAreaView, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';

export default function Post({ navigation }) {
    const [lista, setLista] = useState([]);

    // useEffect(() => {
    //     fetch("http://10.87.207.9:8080/publication", {
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

    useFocusEffect(
        React.useCallback(() => {
            fetch("http://10.87.207.9:8080/publication", {
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
    )

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
                            style={{ width: 30, height: 30, top: 10}}
                            resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </SafeAreaView>
            
            <View style={style.best}>
                <Text style={style.bestText}>PUBLICAÇÕES</Text>
            </View>

            <View style={{flex: 1,}}>
                <ScrollView>
                    {lista.map((item, index) => {
                        return(
                            <View style={style.card} key={index}>
                                <View style={{flexDirection: 'row', alignItems: 'center', margin: 9, marginBottom: 0}}>
                                    <Image source={{uri: item.user.avatar}} style={{width: 35, height: 35, backgroundColor:'#000', borderRadius:50}}/>
                                    <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>{item.user.username}</Text>
                                </View>
                                <View style={style.textss}>
                                    <Text style={{paddingLeft: 5, fontSize: 15}}>{item.text}</Text>
                                    <View style={{flexDirection: 'row', top: -35}}>
                                        <Image source={require('../../assets/app/marcador.png')} style={{width: 18, height: 18, right: 3}} />
                                        <Text style={{fontWeight: 'bold', paddingRight: 5}}>{item.location}</Text>
                                    </View>
                                </View>
                                <Image source={{uri: item.image}} style={{width: 370, height: 220, margin: 9}}/>
                                <View style={{flexDirection: 'row', margin: 10, top: -8, marginBottom: 0}}>

                                    <TouchableOpacity>
                                        <Image source={require('../../assets/app/thumbs-up.png')} style={{width: 32, height: 32}} />
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity onPress={() => { navigation.navigate("Comentario", item) }}>
                                        <Image source={require('../../assets/app/balao-de-fala.png')} style={{width: 29, height: 29, left: 10}} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}    
                    <View style={{height: 75}}></View>
                </ScrollView>

                <View style={style.createpubli}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Publicacao") }} style={[style.button, style.boxWithShadow]}>
                        <Text style={style.buttontext}>Criar Publicação</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}