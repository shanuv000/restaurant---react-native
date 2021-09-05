import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const Searchbar = ({ term, onTermChange, onTermSubmitted }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyles} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        autoCorrect={false}
        value={term}
        autoCapitalize="none"
        onChangeText={onTermChange}
        onEndEditing={onTermSubmitted}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    // backgroundColor: "lightgreen",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    // alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyles: {
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
export default Searchbar;
