/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { Text, View } from "react-native";
// import getNews from "../API/News";

const API = "2474fba8daed4dbfa7136f82eb4d6491";

const NewsScreen = () => {
  const [newsState, setNewsState] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        let req = new Request(
            'https://newsapi.org/v2/everything?' +
            'q=Apple&' +
            'from=2021-08-15&' +
            'sortBy=popularity&' +
            'apiKey=2474fba8daed4dbfa7136f82eb4d6491',
        );
        let data = await fetch(req)
        .then((response) => response.json())
        .then(data => {
            return data;
        });

        // all necessary data are here
        console.log(data.articles)
        setNewsState(data.articles) 


      } catch (error) {
        console.log(error);
      }
    }
    getNews();
  }, []);

  console.log("news state: ", newsState);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
{newsState.map(item => <Text>{item.author}</Text>)}
    </View>
  );
};

export default NewsScreen;
