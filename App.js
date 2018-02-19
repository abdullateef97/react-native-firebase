import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import {Header,Button, Spinner} from './src/comp/common';
import LoginForm from './src/comp/LoginForm'

export default class App extends React.Component {
  state = {loggedIn : null}
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

    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({loggedIn : true})
      }
      else{
        this.setState({loggedIn : false})
      }
    })
  }


  renderContent(){


    switch(this.state.loggedIn){
      case true:
      return (
         <Button onPress={() => firebase.auth().signOut()}>Sign Out</Button>
        )
      case false:
      return <LoginForm/>
     
      default:
      return <Spinner size={"large"}/>
      
    }
    

    
  }


  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Auth'}/>
        {this.renderContent()}
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
