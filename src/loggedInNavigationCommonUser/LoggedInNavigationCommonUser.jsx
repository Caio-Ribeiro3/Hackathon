import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";

import Home from "../home/Home";
import Amigame from "../amigame/Amigame";
import MainPesquisar from "../pesquisar/MainPesquisar";
import Chat from "../chat/Chat";
import Profile from "../perfil/Profile";

const Tab = createMaterialBottomTabNavigator();

export default function LoggedInNavigationCommonUser() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
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
              <MaterialCommunityIcons name="widgets" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="MainPesquisar"
          component={MainPesquisar}
          options={{
            tabBarLabel: "Pesquisar",
            tabBarIcon: ({ color }) => (
              <Icon name="search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <AntDesign name="bars" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }) => (
              <EvilIcons name="user" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
