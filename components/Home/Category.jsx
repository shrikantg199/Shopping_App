import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CategoryItems from "./CategoryItems";
import categories from "../../constants/categories";

const Category = ({ SetCategory }) => {
  const [categoryData, setCategoryData] = useState(categories);

  const bannerImage = [
    {
      id: "1",
      img: require("../../assets/banner/electronicsBanner.png"),
    },
    {
      id: "2",
      img: require("../../assets/banner/fashionBanner.png"),
    },
  ];

  return (
    <View>
      {/* Category row */}
      <View className="flex flex-row justify-between items-center mx-3">
        <Text className="text-xl font-bold">All Featured</Text>
        <View className="flex flex-row gap-3">
          <View className="flex flex-row items-center">
            <FontAwesome5 name="sort-amount-up" size={20} color="black" />
            <Text className="text-base">Sort</Text>
          </View>
          <View className="flex flex-row items-center">
            <MaterialCommunityIcons name="filter" size={20} color="black" />
            <Text className="text-base">Filter</Text>
          </View>
        </View>
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryData.map((item) => (
          <View key={item.id}>
            <CategoryItems category={item} setCategory={SetCategory} />
          </View>
        ))}
      </ScrollView>

      {/* Offers */}
      <View className="w-screen ">
        <FlatList
          data={bannerImage}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Image
                source={item.img}
                className="w-[375px] h-44 mx-2 rounded-2xl"
              />
            </View>
          )}
        />
      </View>
      <View className="m-2 flex flex-row justify-center items-center">
        {bannerImage.map((item, index) => (
          <View key={index} className="bg-red-500 w-2 h-2 m-1 rounded-full" />
        ))}
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
