/** @format */

import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import IconLogout from "react-native-vector-icons/SimpleLineIcons";
import IconNews from "react-native-vector-icons/MaterialCommunityIcons";
import whatsnews from "../assets/whatsnews.jpeg";
import { LinearGradient } from "expo-linear-gradient";
import { Card, Button } from "react-native-elements";

import Firebase from "../config/firebase";
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";

const auth = Firebase.auth();

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
        <Text style={styles.title}>FrenchApp{"&"}Web</Text>
        <Card containerStyle={{ backgroundColor: "#eaf1fb", borderRadius: 10 }}>
          {user.displayName === null ? (
            <Card.Title h1={true} >Welcome John / Jane Doe</Card.Title>
          ) : (
            <Card.Title h4={true}>Welcome {user.displayName}</Card.Title>
          )}
          <Card.Divider />
          <Card.Image source={whatsnews} />
          <View style={{ alignItems: "center" }}>
            <Text style={{ marginVertical: 10, textAlign: "center", fontWeight: "bold" }}>
              Read all the latest news wherever you want
            </Text>
            <Button
              icon={<IconNews name='newspaper' color='#ffffff' size={15} />}
              buttonStyle={{
                borderRadius: 10,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                width: 120,
              }}
              title='SEE NEWS'
              onPress={() => goNewsPage()}
            />
          </View>
        </Card>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Button
            icon={
              <IconLogout
                style={{ marginRight: 5 }}
                name='logout'
                size={15}
                color='#eaf1fb'
              />
            }
            buttonStyle={{
              borderRadius: 10,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
              width: 120,
            }}
            title='LOG OUT'
            onPress={() => handleSignOut()}
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
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#0b85ff",
    alignSelf: "center",
  },
  background: {
    flex: 1,
  },
});
