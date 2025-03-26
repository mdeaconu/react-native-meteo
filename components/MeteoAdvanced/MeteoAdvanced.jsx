import React from "react";
import { View } from "react-native";
import { s, StyledContainer, StyledLabel, StyledValue } from "./MeteoAdvanced.style";

const MeteoAdvanced = ({ sunrise, sunset, windspeed }) => {
  return (
    <View style={s.container}>
      <StyledContainer>
        <StyledValue>{sunrise}</StyledValue>
        <StyledLabel>Sunrise</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{sunset}</StyledValue>
        <StyledLabel>Sunset</StyledLabel>
      </StyledContainer>
      <StyledContainer>
        <StyledValue>{windspeed}</StyledValue>
        <StyledLabel>Windspeed</StyledLabel>
      </StyledContainer>
    </View>
  );
};

export default MeteoAdvanced;
