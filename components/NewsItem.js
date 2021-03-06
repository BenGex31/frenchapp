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
import { Button } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import moment from "moment";
import newsImage from "../assets/news.jpeg";

const NewsItem = ({
  author,
  content,
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
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.title}>{title}</Text>
          {author === null ? (
            <Text style={styles.author}>Unknown author</Text>
          ) : (
            <Text style={styles.author}>by {author}</Text>
          )}
          <Text style={styles.author}>Source: {source}</Text>
          <Text style={styles.author}>Published at : {correctFormatDate}</Text>
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
                  <Button
                    type='clear'
                    title='Go to the web site'
                    onPress={() => WebBrowser.openBrowserAsync(url)}
                  />
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyleClose}>Close</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.textStyleOpen}>Read more...</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  containerTitle: {
    flexDirection: "row",
  },
  image: {
    width: 140,
    height: 120,
  },
  title: {
    fontWeight: "bold",
    fontSize: 11,
    textAlign: "left",
    width: 180,
    color: "black",
    marginVertical: 4,
    marginLeft: 10,
  },
  webArticle: {
    textAlign: "right",
    color: "#eaf1fb",
    fontSize: 6,
  },
  author: {
    textAlign: "left",
    marginBottom: 1,
    marginLeft: 10,
    color: "black",
    fontSize: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  modalView: {
    margin: 20,
    backgroundColor: "lightgrey",
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
    padding: 5,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "lightgrey",
    marginLeft: 5,
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
  },
  textStyleOpen: {
    color: "black",
    fontWeight: "bold",
    fontSize: 10,
  },
  textStyleClose: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "justify",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default NewsItem;
