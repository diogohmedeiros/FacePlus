import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './pages/login';
import Main from './pages/main';
import Feed from './pages/feed';
import Post from './pages/post';
import User from './pages/user';
import Detalhe from './pages/detalhe';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
      >
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Detalhe" component={Detalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}