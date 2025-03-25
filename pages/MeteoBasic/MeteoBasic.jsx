import React from "react";
import { Image, View } from "react-native";
import { s } from "./MeteoBasic.style";
import Txt from "../../components/Txt/Txt";

const MeteoBasic = () => {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>City</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>Sunny</Txt>
      </View>
      <View style={s.temperature_box}>
        <Txt style={s.temperature}>3º</Txt>
        <Image style={s.image} />
      </View>
    </>
  );
};

export default MeteoBasic;
