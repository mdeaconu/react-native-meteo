import React from "react";
import { View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo_utils";

const Home = ({ weather }) => {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
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
