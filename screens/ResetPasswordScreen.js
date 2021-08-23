/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, Button as RNButton } from "react-native";
import Constants from "expo-constants";

import { Button, InputField, ErrorMessage } from "../components";
import Firebase from "../config/firebase";
import { SafeAreaView } from "react-native-safe-area-context";

const auth = Firebase.auth();

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  const sendPasswordReset = () => {
    const emailResetPassword = email;
    auth
      .sendPasswordResetEmail(emailResetPassword)
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((error) => {
        var errorCode = error.code;
        var messageError = error.message;
        console.log("error reset password" + errorCode, messageError);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='dark-content' />
      <Text style={styles.title}>Enter your email to reset your password</Text>
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon='account-edit'
        placeholder='Email'
        autoCapitalize='none'
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        onPress={sendPasswordReset}
        backgroundColor='#f57c00'
        title='Send'
        tileColor='white'
        titleSize={20}
        containerStyle={{
          marginBottom: 24,
          backgroundColor: "#0b85ff",
        }}
      />
      <RNButton
        onPress={() => navigation.navigate("Login")}
        title='Go to Login'
        color='#0d204b'
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf1fb",
    marginTop: Constants.statusBarHeight,
    paddingTop: 50,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0d204b",
    alignSelf: "center",
    paddingBottom: 12,
    fontStyle: "italic",
    textAlign: "center",
  },
});
