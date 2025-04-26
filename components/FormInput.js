import React, { useState } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const FormInput = ({ value = '', onChangeText, placeholder, isPassword = false, isUsername }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!isPassword);
  const [hasFinishedTyping, setHasFinishedTyping] = useState(false);
  const { width } = useWindowDimensions();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.inputContainer, { width: width * 0.9 }]}>
        <TextInput
          style={[
            styles.input,
            isPassword && { paddingRight: 40 },
            isUsername && hasFinishedTyping && styles.finishedUsername,
          ]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={isPassword && isPasswordVisible}
          onBlur={() => setHasFinishedTyping(true)}
          onFocus={() => setHasFinishedTyping(false)}
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
            <Ionicons
              name={isPasswordVisible ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 99,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 60,
    textAlign: 'center',
    fontFamily: 'Poppins_Medium',
    fontSize: 16,
    paddingLeft: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    height: '100%',
    justifyContent: 'center',
  },
  finishedUsername: {
    paddingRight: 30,
  },
});

export default FormInput;
