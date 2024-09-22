import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={20}
        color={"#9298a5"}
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search doctor or health issue"
        placeholderTextColor={"#9298a5"}
        style={styles.INPUT}
        selectionColor={'9298a5'}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 370,
    borderRadius: 15,
    marginLeft: 20,
    backgroundColor: Colors.border,
    marginBottom: 20,
    flexDirection: "row",
  },
  INPUT: {
    height: "100%",
    width: "100%",
    fontSize: 16,
    fontWeight: "600",
  },
  searchIcon: {
    marginTop: 15,
    marginHorizontal: 20,
  },
});
