import React, {Component} from 'react';
import {View,TextInput} from 'react-native';
import {Button, Card, CardSection,Input} from './common';

export default class LoginForm extends Component{
    state = {text : ''}
    render(){
        return(
        <Card>
            <CardSection>
                <Input label={'Email'}
                value = {this.state.text}
                onChangeText={text => this.setState({text})}               
                />
            </CardSection>
            <CardSection/>
            <CardSection>
                <Button>
                    Login
                </Button>
            </CardSection>
        </Card>
        )
    }
}