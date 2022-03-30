import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");

    const [cadastro, setCadastro] = useState(false);
    
    
    const autenticar = () => {
        let user = {
            email: email,
            senha: senha
        }

        fetch('http://10.87.207.9:8080/api/login', {
            "method":"POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(user),
        })
        .then(resp => { 
            if(!(resp.status == 404)){
                return resp.json();
            }
        })
        .then(data => {
            if(data != undefined){
                AsyncStorage.setItem('userdata', JSON.stringify(data[0]));
                navigation.navigate("Main");
            }else{
                ToastAndroid.show('Email ou Senha Inválidos', ToastAndroid.SHORT);
            }
        })
    }

    const habilitarCadastro = () => {
        setCadastro(true);
    }

    const cadastrar = () => {
        let user = {
            nome: nome,
            email: email,
            data_nascimento: data,
            senha: senha,
        }

        fetch("http://10.87.207.9:8080/api/cadastro", {
            "method":"POST",
            "headers": {
                "Content-Type":"application/json"
            },
            "body": JSON.stringify(user)
        })
        .then(resp => {
            if(!(resp.status == 404)){
                return resp.json();
            }})
        .then( data => {
            if(data == undefined) {
                ToastAndroid.show("Falha ao cadastrar", ToastAndroid.SHORT);
                setCadastro(false);
            } else {
                AsyncStorage.setItem('userdata', JSON.stringify(data));
                navigation.navigate("Main");
            }
        });
    }

    return ( 
        <View style={style.container}>
            <LinearGradient colors={["#F51344", "#E50F90"]} style={style.container}>
            <Image style={style.image} source={require('../../assets/app/logo.png')} />

            <TextInput value={email} onChangeText={setEmail} placeholder={"Email"} style={[style.inputs, style.boxWithShadow]} />
            <TextInput value={senha} secureTextEntry={true} onChangeText={setSenha} placeholder={"Senha"} style={[style.inputs, style.boxWithShadow]} />

            {
                (cadastro) ?
                    <View>
                        <TextInput value={nome} onChangeText={setNome} placeholder={"Nome Completo"} style={[style.inputs, style.boxWithShadow]} />
                        <TextInput value={data} onChangeText={setData} placeholder={"Data de Nascimento"} style={[style.inputs, style.boxWithShadow]} />
                        <TouchableOpacity onPress={() => cadastrar() } style={[style.button, style.boxWithShadow]}>
                            <Text style={style.buttontext}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                :
                    <View style={style.view}>
                        <TouchableOpacity onPress={() => autenticar() } style={[style.button, style.boxWithShadow]}>
                            <Text style={style.buttontext}>Entrar</Text>
                        </TouchableOpacity>

                    <View style={style.alignmargin}>
                            <Text style={style.text}>Não tem uma conta?</Text>
                        <TouchableOpacity onPress={() => { habilitarCadastro() }}>
                            <Text style={style.text2}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
            }
            </LinearGradient>
        </View>
    )
}