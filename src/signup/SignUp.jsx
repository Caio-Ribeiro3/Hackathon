import React from "react";
import { View, StyleSheet, Dimensions, Text, ScrollView } from "react-native";
import { Input, Button } from "react-native-elements";

export default function SignUp({ navigation }) {
  const [name, setname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmEmail, setConfirmEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmpassword] = React.useState("");
  const [cnpjOrCpf, setcnpjOrCpf] = React.useState("");
  const [birthDay, setBirthDay] = React.useState("");

  const handleSignUp = (event) => {
    fetch("https://us-central1-amibev-b2cfe.cloudfunctions.net/app/api/sign", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password2: confirmEmail,
        password,
        email2: confirmpassword,
        cpf: cnpjOrCpf,
        cnpj: cnpjOrCpf,
        date: birthDay,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .then(console.error)
      .finally(console.log);
    setname("");
    setEmail("");
    setConfirmEmail("");
    setPassword("");
    setConfirmpassword("");
    setcnpjOrCpf("");
    setBirthDay("");
    navigation.navigate("Login");
  };

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
        <View style={{ alignItems: "center", marginRight: 10 }}>
          <Text style={styles.headerMainText}>5</Text>
          <Text style={styles.headerMainTextSecondary}>MINUTOS</Text>
        </View>
        <View>
          <Text style={styles.headerSecondaryText}>Não se preocupe</Text>
          <Text style={styles.headerSecondaryText}>0 cadastro leva apenas</Text>
          <Text style={styles.headerSecondaryText}>cinco minutos!</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Input
          value={name}
          onChangeText={setname}
          label="Nome completo"
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
          value={confirmEmail}
          onChangeText={setConfirmEmail}
          label="Confirme seu E-mail"
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
          value={cnpjOrCpf}
          onChangeText={setcnpjOrCpf}
          label="CPF ou CNPJ"
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
        <Input
          secureTextEntry={true}
          value={confirmpassword}
          onChangeText={setConfirmpassword}
          label="Confirme sua senha"
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
          value={birthDay}
          onChangeText={setBirthDay}
          label="Data de nascimento"
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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: 10,
          }}
        >
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
            }}
            title="CADASTRAR"
            onPress={handleSignUp}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "white",
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerMainText: {
    fontSize: 96,
    fontWeight: "bold",
    color: "#FF8A00",
    lineHeight: 96,
  },
  headerMainTextSecondary: {
    fontSize: 18,
    color: "#FF8A00",
    lineHeight: 18,
  },
  headerSecondaryText: {
    color: "#FF8A00",
  },
});
