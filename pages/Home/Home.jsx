import React from "react";
import { Text, View } from "react-native";
import { s } from "./Home.style";

const Home = () => {
  return (
    <>
      <View style={s.meteo_basic}>
        <Text>Basic Weather Info</Text>
      </View>
      <View style={s.searchbar_container}>
        <Text>Search bar</Text>
      </View>
      <View style={s.meteo_advanced}>
        <Text>Advanced Weather Info</Text>
      </View>
    </>
  );
};

export default Home;
