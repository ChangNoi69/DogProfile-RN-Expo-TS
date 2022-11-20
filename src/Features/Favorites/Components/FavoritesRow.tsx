import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Components
import { H2_Heading } from "../../../components/Text/H2_Heading";
import { H3_Heading } from "../../../components/Text/H3_Heading";

type FavoritesRowComponentPropTypes = {
  category: string;
  data: string;
};

export const FavoritesRow: React.FC<FavoritesRowComponentPropTypes> = (props) => {
  return (
    <View style={styles.row}>
      <H2_Heading style={styles.category} text={props.category} />
      <H3_Heading text={props.data} />
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    width: "30%",
    marginLeft: "5%",
    marginRight: "15%",
  },
  row: {
    flexDirection: "row",
    marginBottom: "1.5%",
    marginTop: "1.5%",
  },
});
