import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Publicacao from '../../pages/createpost';
import Post from '../../pages/post';

export default function App() {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Publicacao" component={Publicacao} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
  );
}