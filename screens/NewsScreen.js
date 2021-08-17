/** @format */

import React, { useState, useEffect } from "react";
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewsItem from "../components/NewsItem";

const NewsScreen = () => {
  const [newsState, setNewsState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getNews() {
      try {
        let req = new Request(
          "https://newsapi.org/v2/top-headlines?country=fr&apiKey=2474fba8daed4dbfa7136f82eb4d6491"
        );
        let data = await fetch(req)
          .then((response) => response.json())
          .then((data) => {
            return data;
          });

        // all necessary data are here
        setNewsState(data.articles);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    getNews();
  }, []);

  newsState.forEach((item, i) => {
    item.id = i + 1;
  });

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
        source={item.source.name}
        urlToImage={item.urlToImage}
      />
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#eaf1fb" }}>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            There is a problem with database API...
          </Text>
        </View>
      ) : loading ? (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' color='#5a3eff' />
        </View>
      ) : (
        <View>
          <FlatList
            data={newsState}
            keyExtractor={myKeyExtractor}
            extraData={newsState}
            renderItem={renderItem}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  errorContainer: {
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#0b85ff",
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0d204b",
  },
});

export default NewsScreen;
