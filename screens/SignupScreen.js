/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button as RNButton } from "react-native";

import { Button, InputField, ErrorMessage } from "../components";
import Firebase from "../config/firebase";
import "firebase/firestore";

const auth = Firebase.auth();

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [signupError, setSignupError] = useState("");

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth.createUserWithEmailAndPassword(email, password);
        const currentUser = Firebase.auth().currentUser;
        currentUser.updateProfile({
          displayName: firstname + " " + lastname
        })

        /*const db = Firebase.firestore();
        db.collection("users").doc(currentUser.uid).set({
          email: currentUser.email,
          lastname: lastname,
          firstname: firstname,
        });*/
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style='dark-content' />
      <Text style={styles.title}>Create new account</Text>
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon='email'
        placeholder='Email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon='lock'
        placeholder='Password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={(text) => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon='account'
        placeholder='Firstname'
        autoCapitalize='none'
        autoCorrect={false}
        value={firstname}
        onChangeText={(text) => setFirstName(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 14,
        }}
        containerStyle={{
          backgroundColor: "#fff",
          marginBottom: 20,
        }}
        leftIcon='account'
        placeholder='Lastname'
        autoCapitalize='none'
        autoCorrect={false}
        value={lastname}
        onChangeText={(text) => setLastName(text)}
      />
      {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
      <Button
        onPress={onHandleSignup}
        backgroundColor='#f57c00'
        title='Signup'
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf1fb",
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
    paddingBottom: 24,
    fontStyle: "italic",
  },
});
