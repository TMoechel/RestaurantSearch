import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Restaurant from "../viewModel/RestaurantData";

interface IProps {
  restaurant: Restaurant;
}

// props can be destructured
const ResultDetail: React.FunctionComponent<IProps> = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: restaurant.image_url }} style={styles.image} />
      <Text style={styles.name}>{restaurant.name}</Text>
      <Text>
        {" "}
        Stars: {restaurant.rating} Reviews: {restaurant.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 6,
  },
  image: {
    width: 165,
    height: 125,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultDetail;
