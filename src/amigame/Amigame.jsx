import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Card, ListItem, Button, Icon, Text } from "react-native-elements";
import Header from "./Header";
import AmigameCard from "./AmigameCard";

export default function Amigame() {
  return (
    <View style={styles.root}>
      <Header />
      <View style={{ alignItems: "center" }}>
        <Text>Desafios da semana</Text>
      </View>
      <ScrollView>
        <AmigameCard />
        <AmigameCard />
        <AmigameCard />
        <AmigameCard />
        <AmigameCard />
        <AmigameCard />
        <AmigameCard />
        <AmigameCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: Math.round(Dimensions.get("window").width),
  },
});
