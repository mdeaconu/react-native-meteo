import React from "react";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header/Header";
import { s } from "./Forecasts.style";

const Forecasts = () => {
  const { params } = useRoute();
  return (
    <>
      <Header city={params.city} />
    </>
  );
};

export default Forecasts;
