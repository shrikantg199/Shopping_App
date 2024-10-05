import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  useEffect(() => {
    const HideSplashScreen = async () => {
      await SplashScreen.hideAsync();
    };
    const timeout = setTimeout(HideSplashScreen, 1000); //1 sec
    return () => clearTimeout(timeout);
  }, []);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
