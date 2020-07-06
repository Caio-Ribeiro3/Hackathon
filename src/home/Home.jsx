import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Text,
  Image,
} from "react-native-elements";
import Image1 from "../../assets/Vector.png";

export default function Home() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View
          style={{
            position: "absolute",
            top: 0,
            width: 0,
            left: 0,
            height: 0,
            backgroundColor: "transparent",
            borderStyle: "solid",
            borderRightWidth: 100,
            borderTopWidth: 100,
            borderRightColor: "transparent",
            borderTopColor: "#FF8A00",
          }}
        />
        <Text>Vamos começar?</Text>
      </View>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <View style={{ margin: 10 }}>
          <View
            style={{
              height: Math.round(Dimensions.get("window").width),
              backgroundColor: "#FF8A00",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
            imageStyle={styles.cardImage}
          >
            <Image
              source={require("../../assets/Vector.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <Text>AmiGame: Ganhe pontos e troque por descontos</Text>
        </View>
        <View style={{ margin: 10 }}>
          <View
            style={{
              height: Math.round(Dimensions.get("window").width),
              width: Math.round(Dimensions.get("window").width),
              backgroundColor: "#FF8A00",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/Vector.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <Text>Divirta-se com histórias de bar</Text>
        </View>
        <View style={{ margin: 10 }}>
          <View
            style={{
              height: Math.round(Dimensions.get("window").width),
              backgroundColor: "#FF8A00",
              borderRadius: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
            imageStyle={styles.cardImage}
          >
            <Image
              source={require("../../assets/Vector.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
          <Text>Está procurando novas experiências e sabores?</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {},
  card: {
    height: Math.round(Dimensions.get("window").width),
    width: Math.round(Dimensions.get("window").width),
    borderRadius: 10,
  },
  cardImage: {
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "red",
  },
  header: {
    padding: 20,
    alignItems: "center",
    flex: 1,
  },
});
