import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView} from 'react-native';
import style from './style';

export default function User() {
    // const [perfil, setPerfil] = useState()

    // useEffect(() => {
    //     fetch('http://10.87.207.31:8080/api/user/1', {
    //         "method":"GET",
    //         "headers": {
    //             "Content-Type":"application/json"
    //         },
    //     })
    //     .then(resp => { return resp.json(); })
    //     .then(data => { setPerfil(data) })
    //     .catch(err => {
    //     })
    // }, [])


    return (
        <View style={style.container}>
            <View style={style.perfil}>
                
            </View>
        </View>
    )
}