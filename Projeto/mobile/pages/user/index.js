import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import style from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import { TabPubli, PubliView } from './views/publicacao/index.js';
import { TabMyAvaliacao, MyAvaliacaoView } from './views/avaliacao/index.js';

const renderScene = SceneMap({
    publicacoes: PubliView,
    avaliacoes: MyAvaliacaoView,
});

export default function User({ navigation }) {
    const heightPerfil = Dimensions.get('window').height * 0.39;
    const [heightPub, setHeightPub] = useState(Dimensions.get('window').height);

    const [perfil, setPerfil] = useState("");
    const [imagem, setImagem] = useState("")
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'publicacoes', title: 'Publicações' },
        { key: 'avaliacoes', title: 'Minhas Avaliações' },
    ]);

    // useEffect(() => {
    //     const _retrieveData = async () => {
    //         try {
    //             // Se der merda, descomenta essa merda, e seja feliz

    //             // let settings = {
    //             //     method: "POST",
    //             //     body: JSON.stringify({
    //             //         "email": "diogo@gmail.com",
    //             //         "senha": "diogo"
    //             //     })
    //             // }
    //             // let response = await fetch("http://10.87.207.9:8080/api/login", settings);
    //             // let data = await response.json();
    //             // AsyncStorage.setItem('userdata', JSON.stringify(data));

    //             // Ai comenta isso aqui, e depois descomenta
                
    //             const data = await AsyncStorage.getItem('userdata');
    //             let response = await fetch("http://10.87.207.9:8080/api/user/" + (JSON.parse(data)).id);
    //             let dadosPerfil = await response.json();
    //             setPerfil(dadosPerfil);
    //         } catch (error) {
    //         // Error retrieving data
    //         }
    //     };
    //     _retrieveData();
    // }, [])

    useFocusEffect(
        React.useCallback(async () => {
            const data = await AsyncStorage.getItem('userdata');
            let response = await fetch("http://10.87.207.9:8080/api/user/" + (JSON.parse(data)).id);
            let dadosPerfil = await response.json();
            setPerfil(dadosPerfil);
        },[])        
    );

    const renderTabBar = props => {
        return (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#e9e9e9' }}
          style={{ backgroundColor:'#fff3f3', height: 48, borderTopWidth: 1, borderTopColor: '#e5e5e5' }}
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

            <ScrollView>
                <View style={[style.perfil, {height: heightPerfil}]}>
                    <View style={style.view}>
                        <Image source={{uri: perfil.avatar}} style={style.avatar} />
                        <View style={style.textos}>
                            <Text style={style.text}>{perfil.username}</Text>
                            <Text style={style.text}>{perfil.email}</Text>
                        </View>
                    </View>

                    <TouchableOpacity onPress={() => { navigation.navigate("Configuracao", perfil) }} style={style.configuracoes}>
                        <Image source={require('../../assets/app/definicoes.png')} style={style.def}/>
                        <Text style={style.textconf}>Configurações</Text>
                    </TouchableOpacity>

                    <View style={{width: 370, height: 65, top: -35,justifyContent: 'center'}}>
                        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{perfil.biografia}</Text>
                    </View>

                    <TouchableOpacity onPress={() => { navigation.navigate("Publicacao") }} style={[style.button, style.boxWithShadow]}>
                        <Text style={style.buttontext}>Publicar</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1, height: heightPub * 6,}}>
                    <TabView
                        navigationState={{ index, routes }}
                        renderScene={renderScene}
                        onIndexChange={(index) => {
                            setIndex(index);
                        }}
                        renderTabBar={renderTabBar}
                    />
                </View>
            </ScrollView>
        </View>
    )
}