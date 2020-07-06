import React from "react";
import { Card, Text, Button } from "react-native-elements";
import { View, StyleSheet } from "react-native";

export default function PesquisarCards() {
  return (
    <Card
      title="HELLO WORLD"
      containerStyle={styles.card}
      image={require("../../assets/beerPexels.jpeg")}
    >
      <Text style={{ marginBottom: 10, width: "100%" }}>React Native</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "40%",
    margin: 5,
    borderColor: "transparent",
    borderRadius: 10,
    justifyContent: "center",
  },
});
