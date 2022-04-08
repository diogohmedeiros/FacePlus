import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import style from './style';

function TabPubli({isFocused}) {
    return(
        <View style={{flex:1, flexDirection:'row', alignItems: 'center', width: 210, justifyContent: 'center'}}>
            <Text style={isFocused ? {color: '#000', fontWeight: 'bold', fontSize: 13.4} : {color:'#000'}} >Publicações</Text>
        </View>
    )
}

function PubliView({ navigation }) {
    const [lista, setLista] = useState([]);
    const [id, setId] = useState(0);

    // useEffect(async () => {
    //     setId(JSON.parse(await AsyncStorage.getItem("userdata")).id);
    // }, [])

    useEffect(
        React.useCallback(async ()=>{
            setId(JSON.parse(await AsyncStorage.getItem("userdata")).id);
        },[])
    );

    useFocusEffect(
        React.useCallback(async () => {
            fetch("http://10.87.207.9:8080/publication/user/" + id , {
                "method": "GET",
                "headers": {
                    "Content-Type":"application/json"
                }
            })
            .then(resp => { return resp.json() })
            .then(data => { setLista(data) })
            .catch(err => {
            })
        }, [id])
    )

    
    return(
        <View style={style.container}><ScrollView>
        {lista.map((item, index) => {
            return(
                <View style={style.card} key={index}>
                    <View style={{flexDirection: 'row', alignItems: 'center', margin: 9, marginBottom: 0}}>
                        <Image source={{uri: item.user.avatar}} style={{width: 35, height: 35, backgroundColor:'#000', borderRadius:50}}/>
                        <Text style={{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>{item.user.username}</Text>
                    </View>
                    <View style={style.textss}>
                        <Text style={{paddingLeft: 5, fontSize: 15}}>{item.text}</Text>
                        <View style={{flexDirection: 'row', top: -35}}>
                            <Image source={require('../../../../assets/app/marcador.png')} style={{width: 18, height: 18, right: 3}} />
                            <Text style={{fontWeight: 'bold', paddingRight: 5}}>{item.location}</Text>
                        </View>
                    </View>
                    <Image source={{uri: item.image}} style={{width: 370, height: 220, margin: 9}}/>
                    <View style={{flexDirection: 'row', margin: 10, top: -8, marginBottom: 0, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', margin: 10, top: -8, marginBottom: 0,}}>
                            <TouchableOpacity>
                                <Image source={require('../../../../assets/app/thumbs-up.png')} style={{width: 32, height: 32}} />
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => { navigation.navigate("Comentario", item.id) }}>
                                <Image source={require('../../../../assets/app/balao-de-fala.png')} style={{width: 29, height: 29, left: 9}} />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{right: 2}}>
                            <TouchableOpacity onPress={() => {  }}>
                                <Image source={require('../../../../assets/app/menu-pontos-vertical.png')}
                                    style={{width: 23, height: 23, top: 4, justifyContent: 'center'}}
                                />
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                </View>
            )
        })}
    </ScrollView>
        </View>
    )
}

module.exports = {
    TabPubli,
    PubliView
}