import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/AntDesign";

import Feed from '../feed';
import Post from '../post';
import User from '../user';

function MyTabBar({ state, descriptors, navigation }) {
    let selected = state.index;
    return (
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let arrColor = ["#F51344", "#F0125C"];
          let icon = <Icon name="home" color={(selected == index ) ? "#495057" : "#000"} size={26} />;
          if(index == 1) {
            arrColor = ["#F0125C", "#EB1075"];
            icon = <Icon name="pluscircleo"  color={(selected == index ) ? "#495057" : "#000"} size={26} />;
          }else if(index == 2) {
            arrColor = ["#EB1075", "#E50F90"];
            icon = <Icon name="user" color={(selected == index ) ? "#495057" : "#000"} size={26} />;
          } 

          //arrColor = ["#F51344", "#E50F90"]

          return (
            <View style={{flex:1, height: 50, width: "100%",}} >
                <LinearGradient  start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} colors={arrColor} style={{flex:1, height: 30, width: "100%",}}>
                    <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    style={{ flex: 1 , alignItems: 'center', justifyContent: 'center'}}
                    >
                        {icon}
                    </TouchableOpacity>
                </LinearGradient>
            </View>
          );
        })}
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();

  export default function App() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
            <Tab.Screen 
                name="Feed" 
                component={Feed}
            />

            <Tab.Screen 
                name="Post" 
                component={Post}
            />

            <Tab.Screen 
                name="User" 
                component={User}
            />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }