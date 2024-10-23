import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { memo, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import data from "../../data.json";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating-widget";

const ProductDetails = memo(() => {
  const [productItem, setProductItem] = useState("");
  const { id } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    const foundProduct = data.categories
      .flatMap((Category) => Category.products)
      .find((product) => product.id.toString() === id);
    setProductItem(foundProduct);
  }, [id]);
  return (
    <SafeAreaView className="bg-white h-screen flex-1">
      {/* back Button */}
      <View className="flex flex-row justify-between mx-4">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/cart")}>
          <MaterialCommunityIcons name="cart-outline" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* product Details */}
      <View className="">
        <View className="">
          {productItem.imageUrl ? (
            <Image
              source={{ uri: productItem.imageUrl }}
              className="h-80 w-screen  "
              resizeMode="contain"
            />
          ) : (
            <Text>no</Text>
          )}
        </View>
        <Text className="text-2xl font-bold mx-3 ">{productItem.name}</Text>
        <Text className="mx-4">{productItem.description}</Text>
        {/* rating */}
        <StarRating
          rating={productItem.rating || 0}
          starSize={24}
          style={{ marginHorizontal: 16 }}
          starStyle={{ marginHorizontal: -1 }}
        />
        <Text className="text-xl font-bold mx-4">{productItem.price}$</Text>
      </View>
      <View className="absolute bottom-4 ">
        <View className="flex flex-row px-2 justify-between w-screen items-center ">
          <TouchableOpacity className="bg-blue-600 px-2 py-2 rounded-xl">
            <Text className="text-white text-xl">add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-green-400 px-2 py-2 rounded-xl">
            <Text className="text-white text-xl">buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
});

export default ProductDetails;

const styles = StyleSheet.create({});
