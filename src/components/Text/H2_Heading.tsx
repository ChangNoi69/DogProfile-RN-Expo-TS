import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { fonts } from "../../infrastructure/theme/fonts";

type HeadingH2Props = {
  text: string;
  style?: {};
};

export const H2_Heading: React.FC<HeadingH2Props> = ({ text, style }) => {
  return <Text style={[style, styles.h2]}>{text} </Text>;
};

const styles = StyleSheet.create({
  h2: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: fonts.H1_FONT,
  },
});
