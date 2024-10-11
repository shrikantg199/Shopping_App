import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
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
  );
};

export default Header;

const styles = StyleSheet.create({});
