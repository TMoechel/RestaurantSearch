import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Restaurant from "../viewModel/RestaurantData";
import ResultDetail from "./ResultDetail";

interface IProps {
  title: string;
  results: Restaurant[];
  navigation: any;
}

// props can be destructured
const ResultsList: React.FunctionComponent<IProps> = ({
  title,
  results,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RestaurantDetails");
              }}
            >
              <ResultDetail restaurant={item} />
            </TouchableOpacity>
          );
        }}
      />
      <Text style={styles.title}>{results.length} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;
