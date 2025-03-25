import React from "react";
import { Text } from "react-native"
import { s } from "./Txt.style";

const Txt = ({ children, style, ...otherProps }) => {
  return (
    <Text style={[s.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default Txt;
