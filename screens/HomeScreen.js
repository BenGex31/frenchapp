/** @format */

import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import IconLogout from "react-native-vector-icons/SimpleLineIcons";
import IconNews from "react-native-vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

import { IconButton } from "../components";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();
const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const { user } = useContext(AuthenticatedUserContext);
  const navigation = useNavigation();
  console.log(user);

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
    <LinearGradient
      colors={["#0d204b", "#5a3eff", "#38d8ff", "#0b85ff"]}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Welcome</Text>
          {user.displayName === null ? (
            <Text style={styles.title}>John / Jane Doe</Text>
          ) : (
            <Text style={styles.title}>{user.displayName}</Text>
          )}
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
          <IconNews
            name='newspaper-variant-outline'
            size={50}
            color='#eaf1fb'
          />
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
            color='#eaf1fb'
          />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  background: {
    flex: 1,
  },
  containerTitle: {
    borderRadius: 50,
    marginHorizontal: 80,
    padding: 20,
    backgroundColor: "#1d1f29",
    shadowColor: "#eaf1fb",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.59,
    shadowRadius: 16,
    elevation: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#eaf1fb",
    textAlign: "center",
    lineHeight: 30,
  },
});
