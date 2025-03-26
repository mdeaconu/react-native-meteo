import React from "react";
import { s } from "./ForecastListItem.style";
import { Image, View } from "react-native";
import Txt from "../Txt/Txt";

const ForecastListItem = ({ date, day, image, temperature }) => {
  return (
    <View style={s.container}>
      <Image style={s.image} source={image} />
      <Txt style={s.day}>{day}</Txt>
      <Txt style={s.date}>{date}</Txt>
      <Txt style={s.temperature}>{temperature}</Txt>
    </View>
  );
};

export default ForecastListItem;
