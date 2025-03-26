import React from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header/Header";
import ForecastListItem from "../../components/ForecastListItem/ForecastListItem";
import { s } from "./Forecasts.style";

const Forecasts = () => {
  const { params } = useRoute();
  return (
    <>
      <Header city={params.city} />
      <ForecastListItem
        date={"03/11"}
        day={"MON"}
        image={require("../../assets/clouds.png")}
        temperature={3}
      />
    </>
  );
};

export default Forecasts;
