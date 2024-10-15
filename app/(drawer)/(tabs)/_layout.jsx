import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

const TabStructure = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "black",
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: -4,
          marginBottom: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          // tabBarLabelStyle:
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "Wishlist",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <AntDesign name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarLabel: () => null,

          tabBarIcon: ({ focused }) => (
            <View
              className={` mb-[2px] p-4 -mt-5  rounded-full  ${
                focused ? "bg-[#EB3030]" : "bg-white shadow-xl shadow-black"
              }`}
            >
              <Feather
                name="shopping-cart"
                size={24}
                color={focused ? "white" : "black"}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarLabel: "Setting",
          tabBarActiveTintColor: "#EB3030",
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabStructure;

const styles = StyleSheet.create({});
