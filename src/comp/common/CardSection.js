import React ,{Component} from 'react';
import {Text,View} from 'react-native';



export class CardSection extends Component{
    render(){
        return(
            <View style={styles.containerStyle}>
            {this.props.children}
            </View>
        )
    }
}


const styles = {
    containerStyle : {
        borderBottomWidth : 1,
        padding : 5,
        backgroundColor : '#fff',
        flexDirection : 'row',
        justifyContent : 'flex-start',
        borderColor : '#ddd',
        position : 'relative'
    }
}