import React from "react";
import { View } from "react-native";
import MeteoBasic from "../../components/MeteoBasic/MeteoBasic";
import MeteoAdvanced from "../../components/MeteoAdvanced/MeteoAdvanced";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getWeatherInterpretation } from "../../utils/meteo_utils";
import { s } from "./Home.style";

const Home = ({ city, weather, onSubmitSearch }) => {
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
        <SearchBar onSubmit={onSubmitSearch} />
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
