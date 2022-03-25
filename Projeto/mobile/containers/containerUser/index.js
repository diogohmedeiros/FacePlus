import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import User from '../../pages/user';
import Publicacao from '../../pages/createpost';
import Configuracao from '../../pages/configuracao';
import Post from '../../pages/post';
import Comentario from '../../pages/comentario';

export default function App() {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Publicacao" component={Publicacao} />
        <Stack.Screen name="Configuracao" component={Configuracao} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Comentario" component={Comentario} />
      </Stack.Navigator>
  );
}