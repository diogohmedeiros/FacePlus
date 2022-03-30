import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, Text, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';

export default function Comentario({ navigation, route }) {
    const { id } = route.params;
    const [texto, setTexto] = useState("");
    const [lista, setLista] = useState([]);
    const [hora, setHora] = useState("");

    useEffect(() => {
        loadComentarios();        
    }, []);

    const loadComentarios = () => {
        fetch("http://10.87.207.9:8080/publication/" + id, {
            "method": "GET",
            "headers": {
                "Content-Type":"application/json"
            }
        })
        .then(resp => { return resp.json() })
        .then(data => { 
            setLista(data.comments);
            let hora_comment, day_comment; 
            let hora_atual = new Date().toLocaleTimeString().split(":")[0];
            let dia_atual =  new Date().toLocaleDateString().split("/")[1];
            let teste = new Date().toLocaleString("pt-BR");
            // console.log(teste);

            setHora(teste);
            lista.map((item, index) =>{
                hora_comment = item.comment_created.split("T")[1].split(":")[0];
                day_comment = item.comment_created.split("T")[0].split("-")[2];

            });
        })
        .catch(err => {
        })
    }

    const commentcreate = async () => {
        let comment = {
            id_user: (JSON.parse(await AsyncStorage.getItem("userdata")).id),
            text: texto,
            id_publication: id
        }

        fetch('http://10.87.207.9:8080/comment/create', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(comment)
        })
        .then(resp => {
            if(resp.status == 200){
                loadComentarios();      
                setTexto("");
            }
        });
    }
    
    return(
        <View style={style.container}>
            <SafeAreaView>
                <LinearGradient colors={["#F51344", "#E50F90"]}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Post") }}>
                            <Image 
                            source={require('../../assets/app/voltar.png')}
                            style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>

                        <Text style={style.textheader}>Comentários</Text>
                    </View>
                </LinearGradient>
            </SafeAreaView>
            
            <View style={{flex: 1}}>
                <ScrollView>
                    <View>
                        {lista.map((item, index) => {
                            return(
                                <View style={style.cards} key={index}>
                                    <View style={style.viewcomment}>
                                        <Image style={style.cardavatar} source={{uri: item.avatar}}/>
                                        <Text style={{paddingLeft: 8, fontWeight: 'bold', fontSize: 15, right: 25}}>{item.user.username}</Text>
                                        <Text style={style.commentcreated}>{hora}</Text>
                                    </View>
                                    <Text style={style.textcomment}>{item.text}</Text>
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>

            <View style={style.boxinput}>
                <TextInput 
                    value={texto} 
                    onChangeText={(t) => { setTexto(t) }} 
                    placeholder={"Comentar..."} 
                    style={style.textinput}
                />
                <TouchableOpacity onPress={() => { commentcreate() }}>
                    <Image 
                        source={require("../../assets/app/aviao-de-papel.png")} 
                        style={{width: 25, height: 25}}
                        
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}