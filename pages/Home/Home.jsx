import React from "react";
import { View } from "react-native";
import { s } from "./Home.style";
import Txt from "../../components/Txt/Txt";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo_utils";
import MeteoAdvanced from "../../components/MeteoAdvanced/MeteoAdvanced";

const Home = ({ city, weather }) => {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);
  const sunrise = weather.daily.sunrise[0].split("T")[1].padStart(2, "0");
  const sunset = weather.daily.sunset[0].split("T")[1].padStart(2, "0");

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View >
      <View style={s.searchbar_container}>
        <Txt style={{ fontSize: 30 }}>Search Bar</Txt>
      </View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced
          sunrise={sunrise}
          sunset={sunset}
          windspeed={currentWeather.windspeed}
        />
      </View>
    </>
  );
};

export default Home;
