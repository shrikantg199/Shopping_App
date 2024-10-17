import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../../components/Home/Header";
import Category from "../../../components/Home/Category";
import Product from "../../../components/Home/Product";

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const setCategory = (val) => {
    // console.log(val);
    setSelectedCategory(val);
  };
  return (
    <SafeAreaView className="bg-white h-screen my-2">
      <ScrollView verticle showsVerticalScrollIndicator={false}>
        <Header />
        <Category setCategory={setCategory} />
        <Product selectedCategory={selectedCategory} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
