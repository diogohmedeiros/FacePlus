import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';

export default function Publicacao({ navigation }) {

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

            <View style={style.perfil}>
                <Text style={style.desc}>Texto</Text>
                <TextInput style={style.textinput}/>

                <Text style={style.desc2}>° É somente permitido publicar conteúdos sobre acessibilidade e dúvidas de estabelecimentos inclusivos.</Text>
                
                <Text style={style.desc3}>Localização</Text>
                <TextInput style={style.localiza} />

                <TouchableOpacity style={style.selecionarimagem}>
                    <Image source={require('../../assets/app/imagem.png')}/>
                    <Text style={style.textselect}>Selecionar foto</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate("Post") }} style={[style.button, style.boxWithShadow]}>
                <Text style={style.buttontext}>Publicar</Text>
            </TouchableOpacity>
        </View>
    )
}