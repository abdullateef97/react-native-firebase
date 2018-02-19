import React, {Component} from 'react';
import {Text,View,TouchableOpacity} from 'react-native';


export class Button extends Component{
    render(){

        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={this.props.onPress}>
                <Text style={styles.textStyle} >{this.props.children}</Text>
            </TouchableOpacity>
            
        )
    }
}

const styles = {
    buttonStyle: {
        flex : 1,
        backgroundColor: '#fff',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#007aff',
        marginLeft : 5,
        marginRight : 5,
       
    },
    textStyle: {
        alignSelf : 'center',
        color : '#007aff',
        fontSize : 16,
        fontWeight : '600',
        paddingTop :10,
        paddingBottom : 10

    }
}