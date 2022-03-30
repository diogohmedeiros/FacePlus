import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Comentario from '../../pages/comentario';
import Publicacao from '../../pages/createpost';
import Post from '../../pages/post';

export default function App() {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Comentario" component={Comentario} />
        <Stack.Screen name="Publicacao" component={Publicacao} />
      </Stack.Navigator>
  );
}