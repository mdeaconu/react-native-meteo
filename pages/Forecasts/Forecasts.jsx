import React from "react";
import Txt from "../../components/Txt/Txt";
import { s } from "./Forecasts.style";
import { useRoute } from "@react-navigation/native";

const Forecasts = () => {
  const { params } = useRoute();
  return <Txt>Forecasts</Txt>
};

export default Forecasts;
