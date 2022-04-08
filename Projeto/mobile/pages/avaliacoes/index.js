import React, { useState } from 'react';
import style from './style';
import { View, SafeAreaView, Image, TouchableOpacity, Text, ScrollView, TextInput, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Avaliacoes({ navigation, route }) {
    const { id, image, name } = route.params;
    const [texto, setTexto] = useState("");
    const [nota, setNota] = useState(0);

    const avaliar = async () => {
        let avaliar = {
            id_user: (JSON.parse(await AsyncStorage.getItem("userdata")).id),
            id_establishment: id,
            text: texto,
            note: nota
        }

        fetch('http://10.87.207.9:8080/evaluation/create' , {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify(avaliar)
        })
        .then(resp => { 
            if(resp.status == 200){
                
            }
        })
    }

    return(
        <View style={style.container}>
            <SafeAreaView>
                    <LinearGradient colors={["#F51344", "#E50F90"]}>
                        <View style={style.header}>
                            <TouchableOpacity onPress={() => { navigation.navigate("Detalhe", id) }}>
                                <Image 
                                source={require('../../assets/app/voltar.png')}
                                style={{ width: 30, height: 30 }}
                                />
                            </TouchableOpacity>

                            <Text style={style.textheader}>Avaliar</Text>
                        </View>
                    </LinearGradient>
                </SafeAreaView>

                <View style={style.perfil}>
                    <View>
                        <Image source={{uri: image}} style={style.photo}/>
                    </View>
                    <Text style={{fontWeight: 'bold', fontSize: 26, padding: 7, top: -20}}>{name}</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 15, top: -13}}>Avalie agora este estabelecimento</Text>

                    <View style={style.avaliar}>
                        <Picker
                            selectedValue={nota}
                            style={style.picker}
                            onValueChange={(item, index) => setNota(item)}
                            
                        >
                            <Picker.Item label="Nota" value=""/>
                            <Picker.Item label="1" value="1"/>
                            <Picker.Item label="2" value="2"/>
                            <Picker.Item label="3" value="3"/>
                            <Picker.Item label="4" value="4"/>
                            <Picker.Item label="5" value="5"/>
                        </Picker>
                    </View>
                    
                    <TextInput style={style.textBox}
                        value={texto}
                        onChangeText={(t) => setTexto(t)}
                        placeholder={"Escreva aqui sua avaliação..."}
                        multiline
                        autoCapitalize="sentences"
                    />

                    <View style={style.evapubli}>
                        <TouchableOpacity onPress={() => { avaliar(), navigation.navigate("Detalhe", id) }} style={[style.button, style.boxWithShadow]}>
                            <Text style={style.buttontext}>Avaliar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
    )
}