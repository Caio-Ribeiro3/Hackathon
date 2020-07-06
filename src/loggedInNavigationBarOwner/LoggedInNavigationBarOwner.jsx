import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../home/Home";
import Amigame from "../amigame/Amigame";
import MainPesquisar from "../pesquisar/MainPesquisar";
import Chat from "../chat/Chat";
import Profile from "../perfil/Profile";

const Tab = createMaterialBottomTabNavigator();

export default function LoggedInNavigationBarOwner() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Amigame"
        activeColor="white"
        style={{ backgroundColor: "tomato" }}
        barStyle={{ backgroundColor: "#FF8A00" }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Amigame"
          component={Amigame}
          options={{
            tabBarLabel: "Amigame",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="MainPesquisar"
          component={MainPesquisar}
          options={{
            tabBarLabel: "Pesquisar",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
