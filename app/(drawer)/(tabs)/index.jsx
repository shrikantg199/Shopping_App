import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white h-screen">
      <View className="flex flex-row justify-between mx-3">
        {/* menu icon */}
        <Entypo
          name="menu"
          size={28}
          color="black"
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        />
        {/* logo */}
        <Text>Shopping</Text>
        {/* profile icon*/}
        {/* <MaterialCommunityIcons
          name="account-arrow-up-outline"
          size={28}
          color="black"
        /> */}
        <TouchableOpacity onPress={() => router.push("/profile")}>
          <Image
            className="w-10 h-10"
            source={require("../../../assets/SocialIcons/profile.png")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
