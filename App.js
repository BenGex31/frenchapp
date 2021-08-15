import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';
import IconButton from './components/IconButton';
import InputField from './components/InputField';

export default function App() {
  return (
    <View style={styles.container}>
      <Text >Open up App.js to start working on your app!</Text>

        <Button title='Button test' containerStyle={{justifyContent: 'center', alignContent: 'center', width: 200 }}/>

      <IconButton name={'Solid Button'}  type="white"/>
      <InputField 
        placeholder='Search' 
        containerStyle={{justifyContent: 'center', alignContent: 'center', width: 200 }} 
        leftIcon='briefcase-search' placeholderTextColor='#000'
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
