import React, { useState, useEffect } from "react";
import yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);

  const [errMsg, setErrmsg] = useState("");
  const searchApi = async (searchterm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchterm,
          location: "las vegas",
        },
      });
      setResults(response.data.businesses);
      setErrmsg("");
    } catch (err) {
      console.log(err);
      setErrmsg("Something went Wrong!");
    }
  };

  useEffect(() => {
    searchApi("");
  }, []);
  return [searchApi, results, errMsg];
};
