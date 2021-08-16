/** @format */

import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import newsImage from "../assets/news.jpeg";
import IconLogout from "react-native-vector-icons/SimpleLineIcons";
import IconNews from "react-native-vector-icons/MaterialCommunityIcons";

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
      <View style={{alignItems: "center"}}>
        <Image source={newsImage} style={{ height: 200, width: 360 }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <IconButton
          name='See news'
          size={24}
          color='#fff'
          onPress={() => goNewsPage()}
        />
        <IconNews name='newspaper-variant-outline' size={50} color='#0b85ff' />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <IconButton
          name='logout'
          size={24}
          color='#fff'
          onPress={() => handleSignOut()}
        />
        <IconLogout
          style={{ marginLeft: 5 }}
          name='logout'
          size={40}
          color='#0b85ff'
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#0d204b",
    textAlign: "center",
  },
});
