import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Searchbar from "../components/Searchbar";
import yelp from "../api/Yelp";
const SearchScreens = () => {
  const [results, setResults] = useState([]);
  const [term, setTerm] = useState("");
  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };
  return (
    <View>
      <Searchbar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={searchApi}
      />
      <Text>Search Screening</Text>
      <Text>We have Found {results.length} Results</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default SearchScreens;
