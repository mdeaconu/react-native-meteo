import React from "react";
import { Image, View } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../../components/Txt/Txt";

const MeteoBasic = ({ interpretation, temperature }) => {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>City</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>{temperature}º</Txt>
        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
};

export default MeteoBasic;
