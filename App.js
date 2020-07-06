import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import LoggedInNavigationCommonUser from "./src/loggedInNavigationCommonUser/LoggedInNavigationCommonUser";
import NotLoggedInNavigation from "./src/notLoggedInNavigation/NotLoggedInNavigation";
import LoggedInNavigationBarOwner from "./src/loggedInNavigationBarOwner/LoggedInNavigationBarOwner";

const statusBarHeight = Constants.statusBarHeight;

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [users, setUsers] = React.useState([]);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 22 }}>
      {isLoggedIn === true ? (
        <LoggedInNavigationCommonUser setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <NotLoggedInNavigation setIsLoggedIn={setIsLoggedIn} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: statusBarHeight,
  },
});
