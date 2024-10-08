import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [isAuth, setIsAuth] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!isAuth) {
      router.push("/onboarding");
    }
  }, [isAuth]);
  useEffect(() => {
    const HideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };
    const timeout = setTimeout(HideSplashScreen, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(drawer)" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="profile" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
