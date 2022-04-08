import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ToastAndroid, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import style from './style';

export default function Publicacao({ navigation }) {
    const [descricao, setDescricao] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [imagem, setImagem] = useState(null);

    const postar = async () => {
        let post = {
            text: descricao,
            location: localizacao,
            id_user: (JSON.parse(await AsyncStorage.getItem("userdata")).id),
            image: imagem,
        }

        fetch('http://10.87.207.9:8080/publication/create', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(post)
        })
        .then(resp => {
            if(resp.status == 201) { 
                navigation.navigate("Post")
            }else {
                ToastAndroid.show('Não foi possível publicar', ToastAndroid.SHORT);
            }
        })
        .catch(err => {
        })
    }

    const selecionarimagem = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true
        })

        let item = result.uri.split(".")
        if (!result.cancelled) {
            setImagem(`data:image/${item[item.length-1]};base64,`+result.base64);
        }else if(!result.cancelled){
            ToastAndroid.show('Não foi possível selecionar uma foto', ToastAndroid.SHORT);
        }
    }

    return(
        <View style={style.container}>
            <SafeAreaView>
                <LinearGradient colors={["#F51344", "#E50F90"]}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => { navigation.navigate("User") }}>
                            <Image 
                            source={require('../../assets/app/voltar.png')}
                            style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                        
                        <Text style={style.textheader}>Criar Publicação</Text>
                        </View>
                </LinearGradient>
            </SafeAreaView>

        <View style={{flex: 1}}></View>
            <ScrollView>
                <Text style={style.desc}>Texto</Text>
                <TextInput style={style.textinput}
                    value={descricao}
                    onChangeText={(t) => setDescricao(t)}
                    placeholder={"O que está acontecendo?"}
                    multiline
                    autoCapitalize="sentences"
                />

                <Text style={style.desc2}>° É somente permitido publicar conteúdos sobre acessibilidade e dúvidas de estabelecimentos inclusivos.</Text>
                    
                <Text style={style.desc3}>Localização</Text>
                <TextInput value={localizacao} onChangeText={ setLocalizacao } style={style.localiza} />

                <TouchableOpacity style={style.selecionarimagem} onPress={() => { selecionarimagem() }}>
                    <Image source={require('../../assets/app/imagem.png')}/>
                    <Text style={style.textselect}>Selecionar foto</Text>
                </TouchableOpacity>
                

                <Image style={style.preview} source={{uri: imagem}} />
                <View style={{height: 75}}></View>
            </ScrollView>

            <TouchableOpacity 
            onPress={() => { postar() }} 
            style={[style.button, style.boxWithShadow, style.createpubli]}
            >
                <Text style={style.buttontext}>Publicar</Text>
            </TouchableOpacity>
        </View>
    
    )
}