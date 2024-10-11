import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CategoryItems = ({ category }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log(category.category)}
      className="mx-3 items-center my-4"
    >
      <Image source={category.icon} className="w-14 h-14" />
      <Text>{category.category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({});
