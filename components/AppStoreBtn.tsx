import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    View,
    ViewStyle,
    TextStyle,
    ImageSourcePropType,
    ImageStyle,
} from 'react-native'

type MyButtonProps = {
    title: string
    onPress: () => void
    image?: ImageSourcePropType
    style?: ViewStyle
    textStyle?: TextStyle
    imageStyle?: ViewStyle
}

const MyButton: React.FC<MyButtonProps> = ({
    title,
    onPress,
    image,
    style,
    textStyle,
    imageStyle,
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <View style={styles.content}>
                {image && <Image source={image} style={[styles.image]} />}
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        paddingVertical: 18,
        paddingHorizontal: 70,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 20,
        height: 20,
        marginRight: 8,
        resizeMode: 'contain',
    },
    buttonText: {
        color: '#000',
        fontSize: 14,
        fontFamily: 'ClashDisplay_bold',
        fontWeight: '400',
    },
})

export default MyButton
