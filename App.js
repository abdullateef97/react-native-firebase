import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import {Header} from './src/comp/common';
import LoginForm from './src/comp/LoginForm'

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyC49cXos0avB-fjkx2LWRNTndaPGhunPHI",
        authDomain: "auth-a7ccb.firebaseapp.com",
        databaseURL: "https://auth-a7ccb.firebaseio.com",
        projectId: "auth-a7ccb",
        storageBucket: "auth-a7ccb.appspot.com",
        messagingSenderId: "109423552925"
      }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Auth'}/>
        <LoginForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
