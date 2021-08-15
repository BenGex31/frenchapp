/** @format */

import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { IconButton, InputField } from "../components";
import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();

export default function HomeScreen() {
  const { user } = useContext(AuthenticatedUserContext);
  const navigation = useNavigation()
  
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const goNewsPage = () => {
    navigation.navigate('News')
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <Text style={styles.title}>Welcome {user.email}!</Text>
        <IconButton
          name='logout'
          size={24}
          color='#fff'
          onPress={() => handleSignOut()}
        />
      </View>
      <Text style={styles.text}>Your UID is: {user.uid} </Text>
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <IconButton
          name='Go news page'
          size={24}
          color='#fff'
          onPress={() => goNewsPage()}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#000",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: "normal",
    color: "#fff",
  },
});
