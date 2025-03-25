import React from "react";
import { View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";

const Home = () => {
  return (
    <>
      <View style={s.meteo_basic}>
        <Txt style={{ fontSize: 30 }}>Basic Weather Info</Txt>
      </View >
      <View style={s.searchbar_container}>
        <Txt style={{ fontSize: 30 }}>Search Bar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <Txt style={{ fontSize: 30 }}>Advanced Weather Info</Txt>
      </View>
    </>
  );
};

export default Home;
