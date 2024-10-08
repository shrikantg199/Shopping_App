import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
const DrawerLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="(tabs)" options={{ title: "Home" }} />
      </Drawer>
    </View>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
