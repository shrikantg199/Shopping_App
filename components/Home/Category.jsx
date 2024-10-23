import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import CategoryItems from "./CategoryItems";
import categories from "../../constants/categories";

const Category = ({ SetCategory }) => {
  const [categoryData, setCategoryData] = useState(categories);
  const [currentIndex, setCurrentIndex] = useState(0);
  const FlatRef = useRef(null);
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === bannerImage.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    FlatRef.current.scrollToIndex({
      index: currentIndex,
      animated: true,
    });
  }, [currentIndex]);
  return (
    <View>
      {/* Category row */}
      <View className="flex flex-row justify-between items-center mx-3">
        <Text className="text-xl font-bold">All Featured</Text>
        <View className="flex flex-row gap-3 ">
          <View className="flex flex-row items-center bg-white shadow-xl shadow-black px-2 py-1 rounded-lg">
            <FontAwesome5 name="sort-amount-up" size={16} color="black" />
            <Text className="text-base">Sort</Text>
          </View>
          <View className="flex flex-row items-center bg-white shadow-xl shadow-black px-2 py-1 rounded-lg">
            <MaterialCommunityIcons name="filter" size={16} color="black" />
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
          ref={FlatRef}
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
      <View className="m-2 my-2 flex flex-row justify-center items-center">
        {bannerImage.map((item, index) => (
          <View
            key={index}
            className={` w-2 h-2 m-1 rounded-full ${
              currentIndex === index ? "bg-green-500" : "bg-red-300"
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({});
