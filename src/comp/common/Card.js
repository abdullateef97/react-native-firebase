import React , {Component} from 'react';
import {Text, View} from 'react-native';

export class Card extends Component{
    render(){
        return(
<View style={styles.containerStyle}>
{this.props.children}
</View>
        );
    }
}



const styles = {
    containerStyle : {
        borderWidth:1,
        borderColor :'#ddd',
        borderRadius : 2,
        borderBottomWidth : 0,
        shadowColor: '#000',
        shadowOffset : {width : 0,height : 2},
        shadowRadius : 2,
        shadowOpacity : 0.1,
        elevation :1,
        marginLeft : 5,
        marginRight :5,
        marginTop :5,
        position : 'relative'
    }
}