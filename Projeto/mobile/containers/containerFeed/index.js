import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Feed from '../../pages/feed';
import Detalhe from '../../pages/detalhe';
import Notificacao from '../../pages/notificacao';

export default function App() {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detalhe" component={Detalhe} />
        <Stack.Screen name="Notificacao" component={Notificacao} />
      </Stack.Navigator>
  );
}