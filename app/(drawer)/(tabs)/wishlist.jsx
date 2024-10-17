import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { AntDesign } from "@expo/vector-icons";

const wishlist = memo(() => {
  return (
    <SafeAreaView className="bg-white h-screen px-2 flex-1  ">
      <Text>Wishlist</Text>
    </SafeAreaView>
  );
});

export default wishlist;

const styles = StyleSheet.create({});
