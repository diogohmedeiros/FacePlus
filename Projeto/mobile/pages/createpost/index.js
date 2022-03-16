import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ToastAndroid, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import style from './style';

export default function Publicacao({ navigation }) {
    const [descricao, setDescricao] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [estabelecimento, setEstabelecimento] = useState("");
    const [email, setEmail] = useState("");
    const [id_user, setIdUser] = useState("");
    const [imagem, setImagem] = useState(null);

    const postar = () => {
        let post = {
            descricao: descricao,
            estabelecimento: estabelecimento,
            email: email,
            id_user: id_user,
            imagem: imagem,
            localizacao: localizacao,
        }

        fetch('http://10.97.207.31:8080/estabelecimentos/create', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(post)
        })
        .then(resp => {
            if(resp.status == 201) { 
                return resp.json(); 
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
                <TextInput style={style.localiza} />

                <TouchableOpacity style={style.selecionarimagem} onPress={() => { selecionarimagem() }}>
                    <Image source={require('../../assets/app/imagem.png')}/>
                    <Text style={style.textselect}>Selecionar foto</Text>
                </TouchableOpacity>

                <Image style={style.preview} source={{uri: imagem}} />

                <TouchableOpacity onPress={() => { navigation.navigate("Post") }} style={[style.button, style.boxWithShadow]}>
                    <Text style={style.buttontext}>Publicar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}