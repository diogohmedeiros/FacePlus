import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, SafeAreaView, ScrollView, Dimensions  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import style from './style.js';

import { TabFotos, FotosView } from './views/fotos/index.js';
import { TabAvaliacao, AvaliacaoView } from './views/avaliacoes/index.js';

export default function Detalhe({ navigation, route }) {
    const { id } = route.params;
    const [estabelecimento, setEstabelecimento] = useState("");
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'fotos', title: 'Publicações' },
        { key: 'avaliacoes', title: 'Avaliações' },
    ]);

    const heightPerfil = Dimensions.get('window').height * 0.25;
    const [heightPub, setHeightPub] = useState(Dimensions.get('window').height);

    const renderScene = SceneMap({
        fotos: () => <FotosView/> ,
        avaliacoes: () => <AvaliacaoView evaluations={estabelecimento.evaluations ? estabelecimento.evaluations : []}/>,
    });
    
    useEffect(() => {
        fetch('http://10.87.207.9:8080/establishment/' + id, {
            "method": "GET",
            "headers": {
                "Content-Type":"application/json"
            }
        })
        .then(resp => { return resp.json(); })
        .then(data => { setEstabelecimento(data); })
        .catch(err => {
        })
    }, [])

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
                    <TabFotos
                        isFocused={focused}
                    />
                )
              }else{
                return(
                    <TabAvaliacao
                        isFocused={focused}
                    />
                )
              }
          }}
        />
    )};

    return(
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

                        <Text style={style.textheader}>{estabelecimento.name}</Text>
                    </View>
                </LinearGradient>
            </SafeAreaView>

        <ScrollView>
            <View style={[style.perfil, {height: heightPerfil}]}>
                <View style={style.view}>
                    <Image source={{uri: estabelecimento.image}} style={style.avatar}/>
                    <View style={style.textos}>
                        <Text style={style.text}>{estabelecimento.name}</Text>
                        <Text style={style.text}>{estabelecimento.email}</Text>
                    </View>
                </View>
                

                <TouchableOpacity onPress={() => { navigation.navigate("Avaliacoes", estabelecimento) }} style={style.avaliacoes}>
                    <Image source={require('../../assets/app/estrela.png')} style={style.def}/>
                    <Text style={style.textconf}>Avaliar</Text>
                </TouchableOpacity>
            </View>

            <View style={{flex:1, height: heightPub * 6,}}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                renderTabBar={renderTabBar}
            />
            </View>
        </ScrollView>
        </View>
    )
}