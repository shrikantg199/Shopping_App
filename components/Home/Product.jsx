import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import data from "../../data.json";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
const Product = () => {
  const [categories] = useState(data.categories);
  console.log(categories);
  const router = useRouter();
  return (
    <View>
      <View className=" mx-2 flex flex-wrap flex-row mb-3 ">
        {categories.map((category) => (
          <View className="">
            {category.products.map((item) => (
              <View className="">
                <TouchableOpacity
                  onPress={() => router.push(`/product/${item.id}`)}
                  className="bg-white shadow-lg shadow-black w-44 h-80 rounded-2xl my-3  mx-1 pt-3"
                >
                  <Image
                    source={{ uri: item.imageUrl }}
                    className="w-40 h-44 mx-2  rounded-tl-xl rounded-tr-xl"
                  />
                  <Text className="text-xl font-bold mx-3">{item.name}</Text>
                  <Text className="w-28 mx-4">{item.description}</Text>
                  <View className="flex flex-row justify-between items-center mx-2 my-3">
                    <Text className="text-lg font-bold ">{item.price}$</Text>
                    <View className="flex flex-row gap-2 items-center">
                      <Text className="text-lg  ">{item.rating}</Text>
                      <AntDesign name="star" size={24} color="orange" />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
