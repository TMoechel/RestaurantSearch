import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

interface IProps {}

// props can be destructured
const RestaurantDetailsScreen: React.FunctionComponent<IProps> = () => {
  return (
    <View>
      <Text> Restaurant Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default RestaurantDetailsScreen;
