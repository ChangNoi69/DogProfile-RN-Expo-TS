import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

//Font Style Imports
import { fonts } from "../../infrastructure/theme/fonts";

type HeadingH3Props = {
  text?: string;
  style?: {};
};

export const H3_Heading: React.FC<HeadingH3Props> = ({ text, style }) => {
  return <Text style={[styles.h3, style]}> {text} </Text>;
};

const styles = StyleSheet.create({
  h3: {
    fontSize: 20,
    fontFamily: fonts.TEXT_FONT,
  },
});
