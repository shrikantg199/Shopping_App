import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const Header = () => {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex flex-row justify-between mx-3">
        {/* menu icon */}
        <Entypo
          name="menu"
          size={28}
          color="black"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        {/* logo */}
        <View className="flex flex-row items-center gap-1">
          <Image
            source={require("../../assets/logo.png")}
            className="w-9 h-7 object-cover"
          />
          <Text className="text-xl">Shopping</Text>
        </View>
        {/* profile icon*/}

        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Image
            className="w-8 h-8"
            source={require("../../assets/SocialIcons/profile.png")}
          />
        </TouchableOpacity>
      </View>
      {/* Search bar */}
      <View className="bg-white py-[12px] mx-4 my-3 px-3 rounded-3xl shadow-lg shadow-black flex flex-row items-center ">
        <FontAwesome5 name="search" size={18} color="gray" />
        <TextInput placeholder="search" className="text-gray-400 mx-1 " />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
