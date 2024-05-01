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
    <>
      <Text style={styles.text}>{result.name}</Text>
      <View>
        <FlatList
          data={result.photos}
          showsVerticalScrollIndicator={false}
          keyExtractor={(r) => r}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: { marginHorizontal: 15 },
  text: {
    marginVertical: 10,
    // backgroundColor: "grey",
    fontSize: 22,
    fontWeight: "700",
    alignSelf: "center",
    marginHorizontal: 15,
  },
  image: {
    height: 200,
    // width: "100%",
    marginVertical: 7,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 50,
    marginHorizontal: 15,
    shadowColor: "black",
  },
});
export default ResultsShowScreen;
