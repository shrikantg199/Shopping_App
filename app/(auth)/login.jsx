import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const login = memo(() => {
  const router = useRouter();
  const socialIcons = [
    {
      id: 1,
      imageUrl: require("../../assets/SocialIcons/google.png"),
    },
    {
      id: 2,
      imageUrl: require("../../assets/SocialIcons/facebook.png"),
    },
    {
      id: 3,
      imageUrl: require("../../assets/SocialIcons/apple.png"),
    },
  ];
  return (
    <SafeAreaView className="bg-white h-screen">
      <View className="mx-6 my-8 mb-10 w-52">
        <Text className="text-4xl font-bold">Welcome Back!</Text>
      </View>

      {/* email & password*/}
      <View>
        <View className="bg-gray-200 mx-10 py-3 rounded-2xl px-4 flex flex-row mb-8 ">
          <MaterialCommunityIcons name="account" size={24} color="gray" />
          <TextInput placeholder="Username or Email" className="" />
        </View>
        <View className="bg-gray-200 mx-10 py-3 rounded-2xl px-4 flex flex-row mb-12">
          <Entypo name="lock" size={24} color="gray" />
          <TextInput placeholder="Password" className="" />
        </View>
        {/* Login Button */}
        <TouchableOpacity className="bg-[#F83758] mx-10 py-3 rounded-full ">
          <Text className="text-center text-white text-xl">Log in</Text>
        </TouchableOpacity>
        {/* forgot Password */}

        <TouchableOpacity onPress={()=>router.push("/forgotpassword")}>
          <Text className="text-center underline mt-2 text-[#F83758] ">
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-12 mb-6">
        <Text className="text-center ">Or Continue With</Text>
      </View>
      {/* social icons */}
      <View className="flex items-center">
        <FlatList
          data={socialIcons}
          horizontal={true}
          renderItem={({ item }) => (
            <View className="mx-4 border border-red-500 bg-red-100/20 w-14 h-14  rounded-full items-center justify-center">
              <Image source={item.imageUrl} className="h-8 w-8" />
            </View>
          )}
        />
        <View className="flex flex-row my-3">
          <Text>create an Account? </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text className="text-[#F83758]  underline">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
});

export default login;

const styles = StyleSheet.create({});
