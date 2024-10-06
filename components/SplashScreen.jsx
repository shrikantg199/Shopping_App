import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const ImageRef = useRef(null);
  const router = useRouter();
  const ImageData = [
    {
      id: 1,
      image: require("../assets/SplashScreen/fashion shop-rafiki 1.png"),
      heading: "Choose Product",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      id: 2,
      image: require("../assets/SplashScreen/Sales consulting-pana 1.png"),
      heading: "Make payment",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      id: 3,
      image: require("../assets/SplashScreen/Shopping bag-rafiki 1.png"),
      heading: "Get Your order",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
  ];
  // scroll
  const handleScroll = (event) => {
    const ScrollPosition = event.nativeEvent.contentOffset.x;
    // console.log(ScrollPosition);
    const index = Math.round(ScrollPosition / screenWidth);
    // console.log(index);
    setActiveIndex(index);
  };

  // handle next & previous

  const handlePrev = () => {
    if (activeIndex > 0) {
      ImageRef.current.scrollToIndex({
        index: activeIndex - 1,
        animated: true,
      });
    }
  };
  const handleNext = () => {
    if (activeIndex < ImageData.length - 1) {
      ImageRef.current.scrollToIndex({
        index: activeIndex + 1,
        animated: true,
      });
    }
  };
  return (
    <SafeAreaView className="flex-1">
      <View className="flex flex-row justify-between items-center px-2">
        <View className="flex flex-row ">
          <Text className="text-xl font-medium">{activeIndex + 1}</Text>
          <Text className="text-xl font-medium">/</Text>
          <Text className="text-xl font-medium">{ImageData.length}</Text>
        </View>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className="text-xl text-gray-500">Skip</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={ImageData}
        horizontal={true}
        ref={ImageRef}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className=" justify-center items-center">
            <Image
              source={item.image}
              className="w-screen h-[200px] object-cover"
              resizeMode="cover"
            />
          </View>
        )}
      />
      {/* dots */}
      <View className="flex flex-row  items-center  justify-center w-screen">
        <View className="flex flex-row items-center justify-between w-screen py-3 px-3">
          <TouchableOpacity
            className=""
            onPress={handlePrev}
            disabled={activeIndex === 0}
          >
            <Text
              className={`  text-xl font-medium ${
                activeIndex === 0 ? "text-gray-300" : "text-pink-600"
              }`}
            >
              Previous
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row">
            {ImageData.map((item, index) => (
              <View
                key={index}
                className={`h-2 w-2  rounded-full  mx-1  flex flex-row  ${
                  activeIndex == index ? "bg-black w-6" : "bg-gray-400"
                }`}
              ></View>
            ))}
          </View>
          {activeIndex === ImageData.length - 1 ? (
            <TouchableOpacity
              className=""
              onPress={() => router.push("/login")}
            >
              <Text className="text-pink-600 text-xl font-medium">
                Get Started
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity className="" onPress={handleNext}>
              <Text className="text-xl text-pink-600">Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
