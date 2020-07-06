import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Input, Button } from "react-native-elements";

export default function Login({ navigation, route }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (event) => {
    console.log({
      email,
      password,
    });
    setEmail("");
    setPassword("");
    route.params.login.setIsLoggedIn(true);
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerMainText}>AMI</Text>
          <Text style={styles.headerMainText}>BEV</Text>
        </View>
        <View>
          <Text style={styles.headerSecondaryTextBlack}>SIMPLES</Text>
          <Text style={styles.headerSecondaryTextWhite}>PRÁTICO</Text>
          <Text style={styles.headerSecondaryTextBlack}>RÁPIDO &</Text>
          <Text style={styles.headerSecondaryTextWhite}>DIVERTIDO</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#FF8A00",
            borderRadius: 50,
            margin: 10,
          }}
        ></View>
        <Input
          value={email}
          onChangeText={setEmail}
          label="E-mail"
          inputContainerStyle={{ borderColor: "transparent" }}
          labelStyle={{ marginLeft: 20, fontWeight: "normal" }}
          inputStyle={{
            borderRadius: 50,
            borderWidth: 0,
            height: 60,
            backgroundColor: "rgba(196, 196, 196, 0.3)",
            padding: 10,
          }}
        />
        <Input
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          label="Senha"
          inputContainerStyle={{ borderColor: "transparent" }}
          labelStyle={{ marginLeft: 20, fontWeight: "normal" }}
          inputStyle={{
            borderRadius: 50,
            borderWidth: 0,
            height: 60,
            backgroundColor: "rgba(196, 196, 196, 0.3)",
            padding: 10,
          }}
        />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
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
          title="ENTRAR"
          onPress={handleLogin}
        />
      </View>
      <Button
        buttonStyle={{
          borderRadius: 50,
          paddingHorizontal: 70,
          paddingVertical: 10,
          backgroundColor: "transparent",
          height: 50,
          width: "100%",
        }}
        titleStyle={{ color: "#333", fontSize: 12 }}
        onPress={() => navigation.navigate("SignUp")}
        title="Não possui uma conta? Cadastre-se"
      />
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
    flexDirection: "row",
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
