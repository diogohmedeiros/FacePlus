import React, { useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import style from './style';

export default function Configuracao({ navigation }) {
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
        </View>
    )
}