import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Input, Button } from "react-native-elements";

export default function Home({ navigation, route }) {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text>Meu amigo</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 48, color: "white", fontWeight: "bold" }}>
            AMI
          </Text>
          <Text style={{ fontSize: 48, color: "white" }}>BEV</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 0,
          backgroundColor: "transparent",
          borderStyle: "solid",
          borderRightWidth: Dimensions.get("window").width,
          borderTopWidth: 100,
          borderRightColor: "transparent",
          borderTopColor: "#FF8A00",
        }}
      />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Button
          titleStyle={{ color: "#333", fontSize: 12 }}
          buttonStyle={{
            alignSelf: "flex-start",
            borderRadius: 50,
            paddingHorizontal: 70,
            paddingVertical: 10,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "rgba(0, 0, 0, 0.26)",
            height: 50,
            width: 210,
          }}
          title="INICAR"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    backgroundColor: "#FF8A00",
    height: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  headerMainText: {
    fontSize: 48,
    color: "white",
    lineHeight: 48,
  },
  headerSecondaryTextWhite: {
    color: "white",
  },
  headerSecondaryTextBlack: {
    color: "black",
  },
});
