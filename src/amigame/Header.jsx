import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-elements";

export default function Header() {
  return (
    <View style={styles.root}>
      <View style={styles.view}>
        <Avatar
          containerStyle={{ borderColor: "#FF8A00", borderWidth: 3 }}
          size="medium"
          rounded
          source={{
            uri:
              "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
          }}
        />
      </View>
      <View style={styles.view}>
        <Text style={{ color: "#FF8A00", fontWeight: "bold", fontSize: 20 }}>
          Title
        </Text>
        <Text>3370 BP - Mestre cervejeiro</Text>
      </View>
      <View>
        <View>
          <Text style={{ color: "#FF8A00", fontWeight: "bold", fontSize: 20 }}>
            3370
          </Text>
        </View>
        <View>
          <Text style={{ color: "#FF8A00", fontWeight: "bold", fontSize: 20 }}>
            BEER
          </Text>
          <Text style={{ color: "#FF8A00", fontWeight: "bold", fontSize: 12 }}>
            POINTS
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
  view: {
    justifyContent: "flex-end",
    marginRight: 20,
    paddingBottom: 20,
  },
});
