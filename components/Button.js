import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    
} from 'react-native'

const Button = ({ text, textColor = '#fff', onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
             <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
        </TouchableOpacity>
    )
}


export default Button

const styles = StyleSheet.create({
    button: {
        height: 60,
        backgroundColor: '#212121', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 99,
        paddingHorizontal: 20,
        marginBottom: 40,
        marginTop: 20,
      },
      buttonText: {
        fontSize: 18,
        color: 'white', 
        fontFamily: 'Poppins_Medium',
      },
});