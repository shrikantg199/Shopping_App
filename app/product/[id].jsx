import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import data from "../../data.json";
const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView className="bg-white h-screen flex-1">
      {/* <FlatList /> */}
      <Text>{id}</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
