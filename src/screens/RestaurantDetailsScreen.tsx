import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import yelp from "../api/yelp";

interface IProps {
  navigation: any;
}

interface ILocation {
  city: string;
  address1: string;
}

interface IRestaurant {
  name: string;
  location: ILocation;
  photos: string[];
}

// props can be destructured
const RestaurantDetailsScreen: React.FunctionComponent<IProps> = ({
  navigation,
}) => {
  // id param is accessed wich was passed from like so
  // navigation.navigate("RestaurantDetails", { id: item.id });
  // https://api.yelp.com/v3/businesses/{id}
  const id: string = navigation.getParam("id");
  const [result, setResult] = useState<IRestaurant | null>(null);

  const getRestaurantData = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getRestaurantData(id);
  }, []);

  if (!result) return null;
  console.log(result);
  return (
    <View>
      <Text> {result.name}</Text>
      <Text> {result.location.city}</Text>
      <Text> {result.location.address1}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photoUrl) => photoUrl}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 240,
    height: 200,
    paddingLeft: 10,
    marginLeft: 10,
    marginBottom: 5,
  },
  container: {
    marginHorizontal: 10,
  },
});

export default RestaurantDetailsScreen;
