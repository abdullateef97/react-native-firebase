import React, {Component} from 'react';
import {View,TextInput,Text, Alert} from 'react-native';
import {Button, Card, CardSection,Input,Spinner} from './common';
import firebase from 'firebase';

export default class LoginForm extends Component{
    state = {email : '',password : '',error : '',loading : false }
    onButtonPress(){
        let {email,password} = this.state;
        this.setState({error : '',loading:true})

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(
                () => {this.onRefresh.bind(this)
                    // Alert.alert(
                    //     'title','msg',
                    //     [
                    //         {text : 'OK', onPress : () => {console.log('preessed OKAy')}}
                    //     ]
                    // )
                })
            .catch(()=>{
                console.log(1);
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(
                   
                    () => {
                        console.log(3);
                        this.onRefresh.bind(this)
                        // Alert.alert(
                        //     'title','msg',
                        //     [
                        //         {text : 'OK', onPress : () => {console.log('preessed OKAy')}}
                        //     ]
                        // )
                    })
                    .catch(() => {
                        console.log(2);  
                        this.setState({error : 'Authentication Failed',loading: false})
                    })
            })
    }
    onRefresh(){
        this.setState({email : '',password : '',error:'',loading : false})
    }
    alertOnSucess(title,msg){
        Alert.alert(
            title,msg,
            [
                {text : 'OK', onPress : () => {console.log('preessed OKAy')}}
            ]
        )
    }

    renderSpinner(){
        if(this.state.loading){
            return (
                <CardSection>
                <Spinner size={'small'}/>
                </CardSection>
            )
        }
        else{
            return (
                <CardSection>
                <Button onPress = {this.onButtonPress.bind(this)}>
                    Login
                </Button>

            </CardSection>
            )
        }
    }
    render(){
        return(
        <Card>
            <CardSection>
                <Input label={'Email'}
                value = {this.state.email}
                onChangeText={email => this.setState({email})}
                placeholder={'user@example.com'}               
                />
            </CardSection>
           
            <CardSection>
            <Input
            placeholder={'password'} label='Password' value = {this.state.password}
            onChangeText ={password => this.setState({password})}
            secureTextEntry={true}
            />
                </CardSection>
                
                    <Text style={styles.errStyle}>{this.state.error}</Text>
                    
               {this.renderSpinner()}
               <CardSection>
               <Button onPress={this.onRefresh.bind(this)}>
                Refresh
            </Button>
               </CardSection>
           
        </Card>
        )
    }
}

const styles = {
    errStyle :  {
        fontSize : 20,
        color : 'red',
        
        alignItems : 'center',
        justifyContent : 'center'
    }
}