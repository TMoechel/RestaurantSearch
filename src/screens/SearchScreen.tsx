// useEffect Hook enables to run code when component is first rendered
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import Restaurant from "../viewModel/RestaurantData";

interface IProps {
  navigation: any;
}

const SearchScreen: React.FunctionComponent<IProps> = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (priceIndicator: string) => {
    return results.filter((element: Restaurant) => {
      return element.price == priceIndicator;
    });
  };
  return (
    // <View style={styles.container}>
    <>
      <SearchBar
        searchTerm={searchTerm}
        searchTermChanged={setSearchTerm}
        termSubmitted={() => searchApi(searchTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("€")}
          title="Sehr Preiswert"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("€€")}
          title="Etwas teurer"
          navigation={navigation}
        />
        <ResultsList
          results={filterResultsByPrice("€€€")}
          title="Luxus Preis"
          navigation={navigation}
        />
      </ScrollView>
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
