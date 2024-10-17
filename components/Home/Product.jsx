import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import data from "../../data.json";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import StarRating from "react-native-star-rating-widget";
const Product = ({ selectedCategory }) => {
  const [categories] = useState(data.categories);
  // console.log(selectedCategory);
  const filterItems = selectedCategory
    ? categories.filter((item) => item.name === selectedCategory)
    : categories;
  const router = useRouter();
  return (
    <View>
      <View className=" mx-2 flex flex-wrap flex-row mb-3 ">
        {filterItems.map((category) => (
          <View className="" key={category.id}>
            {category.products.map((item) => (
              <View className="" key={item.id}>
                <TouchableOpacity
                  onPress={() => router.push(`/product/${item.id}`)}
                  className="bg-white shadow-lg shadow-black w-44 h-[300px] rounded-2xl my-3  mx-1 pt-3"
                >
                  <Image
                    source={{ uri: item.imageUrl }}
                    className="w-40 h-44 mx-2  rounded-tl-xl rounded-tr-xl"
                  />
                  <View className="h-[70px] my-1">
                    <Text className="text-lg font-bold mx-3">{item.name}</Text>
                    <Text className=" text-xs mx-4">
                      {item.description.split(" ").slice(0, 3).join(" ") +
                        "..."}
                    </Text>
                  </View>
                  <View className="flex  mx-2 bottom-4 flex-row justify-between items-center ">
                    <Text className="text-lg font-bold ">{item.price} $</Text>

                    {/* star rating */}
                    <View className="">
                      <StarRating
                        rating={item.rating}
                        starSize={20}
                        starStyle={{ marginHorizontal: -1 }}
                      />
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
