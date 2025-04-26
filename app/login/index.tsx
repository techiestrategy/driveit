import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  Alert,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';

type Props = {
  onLogin: () => void;
};

export default function LoginScreen({ onLogin }: Props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { width, height } = useWindowDimensions();

  const handleLoginPress = () => {
    if (userName.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    if (userName === 'test' && password === 'test') {
      onLogin();
    } else {
      Alert.alert('Error', 'Incorrect username or password.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[styles.scrollContainer, { paddingBottom: height * 0.1 }]}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('@/assets/images/logo-driveit.png')}
          style={{
            width: width * 0.3,
            height: width * 0.36,
            resizeMode: 'contain',
            marginTop: height * 0.08,
          }}
        />

        <Image
          source={require('@/assets/images/text.png')}
          style={{
            width: width * 0.4,
            height: width * 0.1,
            resizeMode: 'contain',
            marginTop: 10,
            marginBottom: 30,
          }}
        />

        <View style={[styles.formContainer, { width: width * 0.85 }]}>
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

          <Text style={styles.forgotText}>Forgot Password</Text>

          <Button text="LOG IN" onPress={handleLoginPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#304FFE',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#304FFE',
  },
  formContainer: {
    marginTop: 10,
  },
  forgotText: {
    fontFamily: 'Poppins_Medium',
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    marginTop: -10,
    marginBottom: 15,
  },
});
