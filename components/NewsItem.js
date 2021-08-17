/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import moment from "moment";
import newsImage from "../assets/news.jpeg";

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
  const [modalVisible, setModalVisible] = useState(false);
  const correctFormatDate = moment(publishedAt).format("DD/MM/YYYY");
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        {urlToImage === null ? (
          <Image source={newsImage} style={styles.image} />
        ) : (
          <Image source={{ uri: urlToImage }} style={styles.image} />
        )}
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.centeredView}>
            <Modal
              animationType='slide'
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>{content}</Text>
                  <Text>{url}</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyle}>Read more...</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.author}>by {author}</Text>
        <Text style={styles.author}>Source: {source}</Text>
        <Text style={styles.author}>Published at : {correctFormatDate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "#0d204b",
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 110,
    height: 100,
    marginTop: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    width: 200,
    color: "#eaf1fb",
    marginBottom: 10,
  },
  description: {
    width: 200,
    color: "#eaf1fb",
    fontSize: 10,
  },
  webArticle: {
    textAlign: "right",
    color: "#eaf1fb",
    fontSize: 6,
  },
  author: {
    textAlign: "right",
    marginRight: 10,
    marginBottom: 5,
    color: "#eaf1fb",
    fontSize: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#5a3eff",
  },
  buttonClose: {
    backgroundColor: "#5a3eff",
  },
  textStyle: {
    color: "#38d8ff",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default NewsItem;
