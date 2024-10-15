import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../../components/Home/Header";
import Category from "../../../components/Home/Category";
import Product from "../../../components/Home/Product";

const index = () => {
  return (
    <SafeAreaView className="bg-white h-screen my-2">
      <ScrollView verticle showsVerticalScrollIndicator={false}>
        <Header />
        <Category />
        <Product />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
