/** @format */

import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import newsImage from "../assets/news.jpeg"
import Icon from "react-native-vector-icons/SimpleLineIcons";

import { IconButton } from "../components";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();

export default function HomeScreen() {
  const { user } = useContext(AuthenticatedUserContext);
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const goNewsPage = () => {
    navigation.navigate("News");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Welcome to your news app! {user.email}</Text>
      </View>
      <View>
        <Image source={newsImage} style={{height: 200, width: 360}} />
      </View>
      <View>
        <IconButton
          name='Go news page'
          size={24}
          color='#fff'
          onPress={() => goNewsPage()}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Icon
          style={{ marginRight: 5 }}
          name='logout'
          size={30}
          color='#0b85ff'
        />
        <IconButton
          name='logout'
          size={24}
          color='#fff'
          onPress={() => handleSignOut()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#eaf1fb",
    marginTop: 50,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0d204b",
    textAlign: "center",
  },
});
