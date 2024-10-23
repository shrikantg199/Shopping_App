import { Image, StyleSheet, Text, View } from "react-native";
import React, { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import StarRating from "react-native-star-rating-widget";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const wishlist = memo(() => {
  return (
    <SafeAreaView className="bg-white h-screen px-2 flex-1  ">
      <TouchableOpacity
        // onPress={() => router.push(`/product/${item.id}`)}
        className="bg-white shadow-lg shadow-black w-44 h-[320px] rounded-2xl my-3  mx-1 pt-3"
      >
        <Image
          source={require("../../../assets/banner/image.png")}
          className="w-40 h-44 mx-2  rounded-tl-xl rounded-tr-xl"
        />
        <View className="h-[70px] my-1">
          <Text className="text-base font-bold mx-3">Lorem, ipsum dolor.</Text>
          <Text className=" text-xs mx-4">Lorem ipsum dolor sit.</Text>
        </View>
        <View className=" mx-4 bottom-6  ">
          <Text className="text-lg font-bold ">20 $</Text>

          {/* star rating */}
          <StarRating
            rating={4}
            starSize={20}
            starStyle={{ marginHorizontal: -1 }}
          />
        </View>
        {/* favorite icon */}
        <MaterialIcons
          name="favorite"
          size={28}
          color="red"
          style={{
            position: "absolute",
            right: 0,
            marginHorizontal: 16,
            marginVertical: 10,
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
});

export default wishlist;

const styles = StyleSheet.create({});
