/** @format */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const NewsItem = ({
  author,
  content,
  description,
  title,
  source,
  url,
  urlToImage,
  publishedAt,
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Image source={{ uri: urlToImage }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View>
          <Text style={styles.author}>by {author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "black",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  author: {
    textAlign: "right",
  },
});

export default NewsItem;
