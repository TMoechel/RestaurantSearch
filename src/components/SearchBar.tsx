import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

interface IProps {
  searchTerm: string;
  searchTermChanged: (value: string) => void;
  termSubmitted: (value: string) => void;
}

// props can be destructured
const SearchBar: React.FunctionComponent<IProps> = ({
  searchTerm,
  searchTermChanged,
  termSubmitted,
}) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={(value) => termSubmitted(value.nativeEvent.text)}
        style={styles.searchInput}
        placeholder="Search"
        value={searchTerm}
        onChangeText={searchTermChanged}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    fontSize: 18,
  },
  background: {
    marginTop: 10,
    backgroundColor: "lightgrey",
    height: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
