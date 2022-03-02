import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

import Feed from '../feed';
import Post from '../post';
import User from '../user';

export default function Main() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Post" component={Post} />
            <Tab.Screen name="User" component={User} />
        </Tab.Navigator>
    )
}