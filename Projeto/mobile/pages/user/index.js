import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TabPubli, PubliView } from './views/publicacao/index.js';
import { TabMyAvaliacao, MyAvaliacaoView } from './views/avaliacao/index.js';

const renderScene = SceneMap({
    publicacoes: PubliView,
    avaliacoes: MyAvaliacaoView,
});

export default function User({ navigation }) {
    const layout = useWindowDimensions();

    const [perfil, setPerfil] = useState("");

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'publicacoes', title: 'Publicações' },
        { key: 'avaliacoes', title: 'Minhas Avaliações' },
    ]);

    useEffect(() => {
        const _retrieveData = async () => {
            try {
                // Se der merda, descomenta essa merda, e seja feliz

                // let settings = {
                //     method: "POST",
                //     body: JSON.stringify({
                //         "email": "diogo@gmail.com",
                //         "senha": "4321"
                //     })
                // }
                // let response = await fetch("http://10.87.207.31:8080/api/login", settings);
                // let data = await response.json();
                // AsyncStorage.setItem('userdata', JSON.stringify(data));

                // Ai comenta isso aqui, e depois descomenta
                
                const data = await AsyncStorage.getItem('userdata');
                setPerfil(JSON.parse(data));
            } catch (error) {
            // Error retrieving data
            }
        };
        _retrieveData();
    }, [])

    const renderTabBar = props => {
        return (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#feeafa' }}
          style={{ backgroundColor:'#ffc8dd', height: 48 }}
          getLabelText={({ route }) => ""}
          renderIcon={({ route, focused, color }) => {
              if(route.title === "Publicações"){
                return(
                    <TabPubli
                        isFocused={focused}
                    />
                )
              }else{
                return(
                    <TabMyAvaliacao
                        isFocused={focused}
                    />
                )
              }
          }}
        />
    )};

    return (
        <View style={style.container}>
            <SafeAreaView>
                <LinearGradient colors={["#F51344", "#E50F90"]}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => { navigation.navigate("Feed") }}>
                            <Image 
                            source={require('../../assets/app/voltar.png')}
                            style={{ width: 30, height: 30 }}
                            />
                        </TouchableOpacity>
                        
                        <Text style={style.textheader}>Meu Perfil</Text>
                        </View>
                </LinearGradient>
            </SafeAreaView>
        
            <View style={style.perfil}>
                <View style={style.view}>
                    <Image onPress={() => {}} source={{uri: perfil.avatar}} style={style.avatar} />
                    <View style={style.textos}>
                        <Text style={style.text}>{perfil.username}</Text>
                        <Text style={style.text}>{perfil.email}</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => { navigation.navigate("Configuracao") }} style={style.configuracoes}>
                    <Image source={require('../../assets/app/definicoes.png')} style={style.def}/>
                    <Text style={style.textconf}>Configurações</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { navigation.navigate("Publicacao") }} style={[style.button, style.boxWithShadow]}>
                    <Text style={style.buttontext}>Publicar</Text>
                </TouchableOpacity>
            </View>

            <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            renderTabBar={renderTabBar}
            />
        </View>
    )
}