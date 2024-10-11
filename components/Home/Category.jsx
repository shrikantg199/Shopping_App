import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CategoryItems from "./CategoryItems";
import categories from "../../constants/categories";

const Category = () => {
  const [categoryData, setCategoryData] = useState(categories);
  console.log(categories);
  return (
    <View>
      {/* Search bar */}
      <View className="bg-white  py-[12px] mx-4 my-3 px-3 rounded-3xl shadow-lg shadow-black flex flex-row items-center ">
        <FontAwesome name="search" size={18} color="gray" />
        <TextInput placeholder="search" className="text-gray-400 mx-1 " />
      </View>

      {/* Category row */}
      <View className="flex flex-row justify-between items-center mx-3">
        <Text className="text-xl font-bold">All Featured </Text>
        <View className="flex flex-row gap-3">
          <View className="flex flex-row items-center">
            <FontAwesome5 name="sort-amount-up" size={20} color="black" />
            <Text className="text-base">sort</Text>
          </View>
          <View className="flex flex-row items-center">
            <MaterialCommunityIcons name="filter" size={20} color="black" />
            <Text className="text-base">Filter</Text>
          </View>
        </View>
      </View>

      {/* Category  */}
      <FlatList
        data={categoryData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <CategoryItems category={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
