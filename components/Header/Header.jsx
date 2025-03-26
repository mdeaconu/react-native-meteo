import React from "react";
import { TouchableOpacity, View } from "react-native";
import Txt from "../Txt/Txt";
import { s } from "./Header.style";
import { useNavigation } from "@react-navigation/native";

const Header = ({ city }) => {
  const navigation = useNavigation();

  return (
    <View style={s.container}>
      <TouchableOpacity style={s.back_button} onPress={navigation.goBack}>
        <Txt>{"<"}</Txt>
      </TouchableOpacity>
      <View style={s.header_texts}>
        <Txt>{city.toUpperCase()}</Txt>
        <Txt style={s.subtitle}>7 day forecasts</Txt>
      </View>
    </View>
  );
};

export default Header;
