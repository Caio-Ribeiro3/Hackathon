import React from "react";
import {
  Avatar,
  Text,
  Card,
  Button,
  Icon,
  ListItem,
} from "react-native-elements";
import { View, StyleSheet, Dimensions } from "react-native";

export default function AmigameCard() {
  return (
    <Card containerStyle={styles.root}>
      <View>
        <Text style={{ fontSize: 15 }}>Taverna hipster</Text>
      </View>
      <View style={styles.view}>
        <Text style={styles.view}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          nisl varius, mollis neque quis, commodo ipsum. Donec ut porta purus.
          Maecenas ac semper erat, id auctor augue.
        </Text>
      </View>
      <View style={styles.view}>
        <Button
          title="Pegar desafio?"
          titleStyle={{ fontSize: 12, color: "#333" }}
          buttonStyle={styles.button}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    margin: 10,
  },
  listItem: {
    margin: 0,
  },
  view: {
    marginVertical: 5,
  },
  button: {
    padding: 5,
    backgroundColor: "transparent",
    color: "#eee",
    width: null,
  },
});
