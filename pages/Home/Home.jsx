import React from "react";
import { View } from "react-native";
import { s } from "./Home.style";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";
import { getWeatherInterpretation } from "../../utils/meteo_utils";
import MeteoAdvanced from "../../components/MeteoAdvanced/MeteoAdvanced";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = ({ city, weather }) => {
  const currentWeather = weather.current_weather;
  const currentInterpretation = getWeatherInterpretation(currentWeather.weathercode);
  const sunrise = weather.daily.sunrise[0].split("T")[1].padStart(2, "0");
  const sunset = weather.daily.sunset[0].split("T")[1].padStart(2, "0");

  return (
    <>
      <View style={s.meteo_basic}>
        <MeteoBasic
          dailyWeather={weather.daily}
          city={city}
          interpretation={currentInterpretation}
          temperature={Math.round(currentWeather.temperature)}
        />
      </View >
      <View style={s.searchbar_container}>
        <SearchBar />
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
