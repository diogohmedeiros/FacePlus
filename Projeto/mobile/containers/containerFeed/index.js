import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Feed from '../../pages/feed';
import Detalhe from '../../pages/detalhe';
import Notificacao from '../../pages/notificacao';
import Avaliacoes from '../../pages/avaliacoes';

export default function App() {
  return (
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Detalhe" component={Detalhe} />
        <Stack.Screen name="Notificacao" component={Notificacao} />
        <Stack.Screen name="Avaliacoes" component={Avaliacoes} />
      </Stack.Navigator>
  );
}