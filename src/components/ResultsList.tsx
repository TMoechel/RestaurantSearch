import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
// injects navigation prop into this component
// export needs to be wrapped with this function
// export default withNavigation(ResultsList);
import { withNavigation } from "react-navigation";

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
  if (!results.length) return null;

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
                navigation.navigate("RestaurantDetails", { id: item.id });
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

export default withNavigation(ResultsList);
