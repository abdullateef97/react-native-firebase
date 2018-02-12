import React , {Component}from 'react';
import  ReactNative, {Text, View} from 'react-native';

export class Header extends Component{
    render (){
        let {headerText} = this.props;
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{headerText}</Text>
            </View>
            
        )
    }
}

const styles = {
    textStyle : {
        fontSize :20,
        color : "green"
    },
    viewStyle : {
        backgroundColor : '#F8F8F8',
        height : 70,
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 20,
        shadowColor : '#000',
        shadowOffset : {width : 0, height:3},
        shadowOpacity : 0.3,
        elevation :2

    }
}