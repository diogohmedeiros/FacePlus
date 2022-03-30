import React, { useState ,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, TouchableOpacity, Text, Image, SafeAreaView, TextInput, ToastAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import style from './style';

export default function Configuracao({ navigation, route }) {
    const { id } = route.params;
    const [perfil, setPerfil] = useState("");

    const [imagem, setImagem] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [biografia, setBiografia] = useState("");

    // useEffect(() => { 
    //     fetch('http://10.87.207.9:8080/api/user/' + id , {
    //         "method": "GET",
    //         "headers": {
    //             "Content-Type":"application/json"
    //         }
    //     })
    //     .then(resp => { return resp.json(); })
    //     .then(data => setPerfil(data))
    // }, [])

    useEffect(
        React.useCallback(() => {
            fetch('http://10.87.207.9:8080/api/user/' + id , {
                "method": "GET",
                "headers": {
                    "Content-Type":"application/json"
                }
            })
            .then(resp => { return resp.json(); })
            .then(data => setPerfil(data))
        }, [])
    );

    const alterar = async () => {
        let alterar = {
            id_user: id,
            nome: nome,
            email: email,
            biografia: biografia,
            senha: senha,
            image: imagem
        }

        fetch('http://10.87.207.9:8080/api/update', {
            "method": "PUT",
            "headers": {
                "Content-Type":"application/json"
            },
            "body": JSON.stringify(alterar)
        })
        .then(resp => {
            if(resp.status == 200){
                
            }
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

                        <Text style={style.textheader}>Configurações</Text>
                    </View>
                </LinearGradient>
            </SafeAreaView>

            <View style={{flex: 1}}>
                <View style={{alignItems: 'center', margin: 35}}>
                    <Image source={{uri: imagem}} style={style.fotoPerfil}/>
                    <TouchableOpacity style={style.trocarFoto} onPress={() => { selecionarimagem() }}>
                        <Image source={require('../../assets/app/imagem.png')} style={{width: 18, height: 18, left: 4}}/>
                        <Text style={{right: 10, fontWeight: 'bold'}}>Trocar foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={{top: 5}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, margin: 15}}>Nome de usuário</Text>
                    <TextInput value={nome} onChangeText={ setNome } style={style.alterarNome}/>

                    <Text style={{fontWeight: 'bold', fontSize: 15, margin: 15, top: -39}}>Biografia</Text>
                    <TextInput value={biografia} onChangeText={ setBiografia } style={style.alterarBio}/>

                    <Text style={{fontWeight: 'bold', fontSize: 15, margin: 15, top: -81}}>Email</Text>
                    <TextInput value={email} onChangeText={ setEmail } style={style.alterarEmail}/>

                    <Text style={{fontWeight: 'bold', fontSize: 15, margin: 15, top: -125}}>Senha</Text>
                    <TextInput 
                        value={senha} 
                        onChangeText={ setSenha }
                        secureTextEntry={true}
                        style={style.alterarSenha}
                    />
                </View>
                
                <View style={style.updatePerfil}>
                    <TouchableOpacity onPress={() => { alterar(), navigation.navigate("User") }} style={[style.button, style.boxWithShadow]}>
                        <Text style={style.buttontext}>Alterar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}