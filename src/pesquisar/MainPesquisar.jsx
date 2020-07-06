import React from "react";
import { View, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import Map from "./Map";
import { SearchBar, Card, Text } from "react-native-elements";
import BottomSheet from "reanimated-bottom-sheet";
import PesquisarCards from "./PesquisarCards";
import Filter from "./Filter";

export default function MainPesquisar() {
  const [search, setSearch] = React.useState("");
  const [filters, setFilters] = React.useState([]);

  renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        height: 370,
        backgroundColor: "#FF8A00",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: 10,
        }}
      >
        {filters.length > 0
          ? filters.map((item, index) => (
              <Filter
                key={index}
                text={item}
                remove={() => {
                  console.log(index);
                  setFilters(filters.splice(index, 1));
                }}
              >
                {item}
              </Filter>
            ))
          : false}
      </View>
    </View>
  );

  renderHeader = () => (
    <View
      style={{
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: "#FF8A00",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{ height: 30, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            width: 50,
            backgroundColor: "white",
            height: 7,
            borderRadius: 10,
          }}
        ></View>
      </View>
      <Text h3 style={{ color: "white" }}>
        Onde vamos hoje?
      </Text>
      <Text style={{ color: "white" }}>De acordo com o que você escolheu</Text>
    </View>
  );

  const handleSubmitSearchBarInput = (event) => {
    setFilters([...filters, event.nativeEvent.text]);
    setSearch("");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
    >
      <View style={styles.root}>
        <SearchBar
          searchIcon={null}
          containerStyle={styles.searchbar}
          inputStyle={styles.inputStyle}
          inputContainerStyle={styles.inputContainerStyle}
          placeholder="Pesquisar filtros"
          onChangeText={setSearch}
          value={search}
          placeholderTextColor="white"
          onSubmitEditing={handleSubmitSearchBarInput}
        />
        <Map />
        <BottomSheet
          snapPoints={[450, 300, 30]}
          renderContent={renderContent}
          renderHeader={renderHeader}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
  searchbar: {
    position: "absolute",
    width: "90%",
    backgroundColor: "#FF8A00",
    zIndex: 1,
    padding: 0,
    margin: 0,
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
    borderRadius: 50,
  },
  inputStyle: {
    backgroundColor: "#FF8A00",
    padding: 0,
    margin: 0,
    fontSize: 15,
    borderRadius: 50,
  },
  inputContainerStyle: {
    backgroundColor: "#FF8A00",
    padding: 0,
    margin: 0,
    borderRadius: 50,
  },
});
