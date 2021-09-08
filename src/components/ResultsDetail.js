import React from "react";
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.conatiner}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: { marginLeft: 15 },
  image: {
    width: 250,
    borderRadius: 4,
    height: 120,
    marginBottom: 5,
  },
  name: { fontWeight: "bold" },
  title: {},
});
export default ResultsDetail;
