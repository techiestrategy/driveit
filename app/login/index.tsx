import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { ScrollView, Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button'
import FormInput from '@/components/FormInput'


type Props = {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: Props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handleLoginPress = () => {
    if (userName.trim() === '' || password.trim() === '') {
      // let the user know username and password is required,
      Alert.alert('Error', 'Please enter both username and password.');
      return; // Prevent calling onLogin if fields are empty
    }
   // Check if username and password are "test" (case-sensitive)
   if (userName === 'test' && password === 'test') {
    onLogin(); // Proceed with login if credentials match
  } else {
    // Inform the user about incorrect credentials
    Alert.alert('Error', 'Incorrect username or password.');
  }
  };

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Image
          source={require('@/assets/images/logo-driveit.png')}
          style={styles.imageLogo}
        />

        <Image
          source={require('@/assets/images/text.png')}
          style={styles.imageLogoName}
        />

        <View>

          <FormInput
            value={userName}
            onChangeText={setUserName}
            placeholder="Enter your username"
            isPassword={false}
            isUsername={true}
            
          />

          <FormInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            isPassword={true}
            isUsername={false}
          />

          <Text style={{ fontFamily: 'Poppins_Medium', fontSize: 14, textAlign: 'center', color: '#fff', marginTop: -10, marginBottom: 15}}>Forgot Password</Text>

          <Button text={'LOG IN'} onPress={handleLoginPress} />

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#304FFE',
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 5,
  },
  imageLogo: {
    width: 122,
    height: 146,
    marginTop: 60,
  },
  imageLogoName: {
    width: 146,
    height: 38,
    marginTop: 10,
    marginBottom: 30,
  },
  headerView: {
    marginVertical: 20,
    width: 300,

  },
  headerTitle: {
    fontFamily: 'Poppins_Medium',
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 500
  },
  headerIntro: {
    textAlign: 'center',
    fontFamily: 'Poppins_Medium',
  },
  textAlignCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomMargin: {
    marginBottom: 20,
  },
  lineContainer: {
    width: '87%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    position: 'relative',
  },
  line: {
    height: 1,
    backgroundColor: '#E1DBF0',
    width: '100%',
  },
  lineText: {
    position: 'absolute',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    color: '#000',
    fontFamily: 'Poppins_Medium',
    fontSize: 16,
    fontWeight: 500
  },
  formContainer: {
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 10,
    gap: 4,
  },
  IonicCheckbox: {
    position: 'absolute',
    marginTop: -20,
  },
  checkbox: {
    width: 24,
    height: 24,
    backgroundColor: '#E8DEFE',
    borderRadius: 4,
    marginRight: 10,
    marginTop: 0,
  },
  checkedBox: {
    backgroundColor: '#E8DEFE',
    borderColor: '#1E90FF',
  },
  checkmark: {
    color: '#000',
    fontSize: 11,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 2,
  },
  label: {
    fontSize: 14,
    color: '#333',
    maxWidth: 250,
    fontFamily: 'Poppins_Medium',
    textAlign: 'center',
  },
  link: {
    fontWeight: 'bold',
    color: '#000',
  },

});
