import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import yelp from "../api/Yelp";
const ResultsShowScreen = ({ navigation }) => {
  const [result, setresult] = useState(null);
  const id = navigation.getParam("id");
  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`);
    setresult(response.data);
  };

  useEffect(() => {
    getResults(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>{result.name}</Text>
        <FlatList
          data={result.photos}
          keyExtractor={(r) => r}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { margin: 10 },
  text: {
    padding: 10,
    fontSize: 22,
    fontWeight: "700",
    alignSelf: "center",
  },
  image: {
    height: 200,
    paddingHorizontal: 5,
    width: "100%",
    marginTop: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 50,
    shadowColor: "black",
  },
});
export default ResultsShowScreen;
