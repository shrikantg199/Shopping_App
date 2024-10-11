import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import Header from "../../../components/Home/Header";
import Category from "../../../components/Home/Category";

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-screen my-2">
      <Header />
      <Category />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
