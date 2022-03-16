import React from 'react';
import { View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';

export default function Post({ navigation }) {
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

            <View style={style.createpubli}>
                <TouchableOpacity onPress={() => { navigation.navigate("Publicacao") }} style={[style.button, style.boxWithShadow]}>
                    <Text style={style.buttontext}>Criar Publicação</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}