import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Filter({ text, remove }) {
  return (
    <View>
      <Button
        titleStyle={styles.title}
        buttonStyle={styles.button}
        iconRight
        title={text}
        onPress={() => console.log("teste")}
        icon={<Icon name="close" size={10} color="#333" />}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    borderRadius: 50,
    margin: 10,
    marginBottom: 0,
  },
  title: {
    color: "#333",
    marginRight: 10,
  },
});
