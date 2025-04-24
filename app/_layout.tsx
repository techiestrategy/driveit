// app/_layout.tsx
import { Stack } from 'expo-router';
import { useFonts } from "expo-font";
import { useState } from 'react';
import Login from './login'; 

export default function RootLayout() {
  useFonts({
    'Gilroy_Bold':require('./../assets/fonts/Gilroy_Bold.ttf'),
    'Gilroy_Medium':require('./../assets/fonts/Gilroy_Medium.ttf'),
    'Gilroy_Regular':require('./../assets/fonts/Gilroy_Regular.ttf'),
    'Poppins_Bold':require('./../assets/fonts/Poppins_Bold.ttf'),
    'Poppins_Medium':require('./../assets/fonts/Poppins_Medium.ttf'),
    'Poppins_Regular':require('./../assets/fonts/Poppins_Regular.ttf'),
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
