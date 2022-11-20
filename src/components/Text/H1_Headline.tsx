import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Import FontStyles
import { fonts } from "../../infrastructure/theme/fonts";

type HeadlineComponentProps = {
  text: string;
  style?: {};
};

export const H1_Headline: React.FC<HeadlineComponentProps> = ({ text }) => {
  return <Text style={styles.userName}> {text} </Text>;
};

const styles = StyleSheet.create({
  userName: {
    paddingTop: 10,
    fontSize: 25,
    fontFamily: fonts.H1_FONT,
  },
});
