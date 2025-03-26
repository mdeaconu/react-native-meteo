import React from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import ForecastListItem from "../../components/ForecastListItem/ForecastListItem";
import { getDayInfo, getWeatherInterpretation } from "../../utils/meteo_utils";

const Forecasts = () => {
  const { params } = useRoute();
  const forecastList = (
    <View style={{ marginTop: 50 }}>
      {
        params.time.map((time, index) => {
          const weatherCode = params.weathercode[index];
          const image = getWeatherInterpretation(weatherCode).image;
          const temperature = params.temperature_2m_max[index];
          const [dayOfTheWeek, formattedDate] = getDayInfo(time);

          return (
            <ForecastListItem
              key={time}
              date={formattedDate}
              day={dayOfTheWeek}
              image={image}
              temperature={temperature.toFixed(0)}
            />
          );
        })
      }
    </View>
  );

  return (
    <>
      <Header city={params.city} />
      {forecastList}
    </>
  );
};

export default Forecasts;
