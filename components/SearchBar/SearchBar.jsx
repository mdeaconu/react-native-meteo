import React from "react";
import { s } from "./SearchBar.style";
import { TextInput } from "react-native";

const SearchBar = ({ onSubmit }) => {
  return (
    <TextInput
      onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
      placeholder="Type a city..."
      style={s.input}
    />
  );
};

export default SearchBar;
