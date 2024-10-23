import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

const forgotpassword = memo(() => {
  return (
    <SafeAreaView className="bg-white h-screen">
      <View className="mx-6 my-8 mb-10 justify-center ">
        <Text className="text-4xl font-bold text-center">
          Forgot Password ?
        </Text>
      </View>
      <View className="bg-gray-200 mx-10 py-3 rounded-2xl px-4 flex flex-row mb-8 items-center">
        <Entypo name="mail" size={22} color="gray" />
        <TextInput placeholder="Enter Your Email" className="" />
      </View>
      <TouchableOpacity className="bg-[#F83758] mx-10 py-3 rounded-full ">
        <Text className="text-center text-white text-xl">Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
});

export default forgotpassword;

const styles = StyleSheet.create({});
