import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../Txt/Txt";
import Clock from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

const MeteoBasic = ({ city, dailyWeather, interpretation, temperature }) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperature_box}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Forecasts", { city, ...dailyWeather })}
        >
          <Txt style={s.temperature}>{temperature}º</Txt>
        </TouchableOpacity>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
};

export default MeteoBasic;
