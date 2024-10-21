import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CategoryItems = ({ category, setCategory }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => setCategory(category.category)}
      className="mx-3 items-center my-4"
    >
      <Image source={category.icon} className="w-14 h-14" />
      <Text>{category.category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItems;

const styles = StyleSheet.create({});
