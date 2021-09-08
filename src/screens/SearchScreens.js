import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Searchbar from "../components/Searchbar";
// import yelp from "../api/Yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreens = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errMsg] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <Searchbar
        term={term}
        onTermChange={setTerm}
        onTermSubmitted={() => searchApi(term)}
      />

      {/* {errMsg ? <Text>{errMsg}</Text> : null} */}
      {/* <Text>We have Found {results.length} Results</Text> */}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Big Big Biggies"
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({ container: { flex: 1 } });
export default SearchScreens;
