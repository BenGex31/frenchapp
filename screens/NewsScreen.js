/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsItem from "../components/NewsItem";
import { StyleSheet } from "react-native";

const API = "2474fba8daed4dbfa7136f82eb4d6491";

const NewsScreen = () => {
  const [newsState, setNewsState] = useState([]);

  useEffect(() => {
    async function getNews() {
      try {
        let req = new Request(
          "https://newsapi.org/v2/everything?" +
            "q=Apple&" +
            "from=2021-08-15&" +
            "sortBy=popularity&" +
            "apiKey=2474fba8daed4dbfa7136f82eb4d6491"
        );
        let data = await fetch(req)
          .then((response) => response.json())
          .then((data) => {
            return data;
          });

        // all necessary data are here
        setNewsState(data.articles);
      } catch (error) {
        console.log(error);
      }
    }
    getNews();
  }, []);

  newsState.forEach((item, i) => {
    item.id = i + 1;
  });

  console.log(newsState);

  const myKeyExtractor = (item) => {
    return item.id.toString();
  };

  const renderItem = ({ item }) => {
    return (
      <NewsItem
        title={item.title}
        author={item.author}
        publishedAt={item.publishedAt}
        content={item.content}
        description={item.description}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={newsState}
        keyExtractor={myKeyExtractor}
        extraData={newsState}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 15,
  },
});

export default NewsScreen;
