import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Colors
import { colors } from "../../../src/infrastructure/theme/colors";

// Components
import { FavoritesRow } from "./Components/FavoritesRow";
import { H1_Headline } from "../../components/Text/H1_Headline";

export const Favorites: React.FC = () => {
  return (
    <View style={styles.favoritesContainer}>
      <H1_Headline text="Favorites" />
      <View style={styles.favoritesBackground}>
        <FavoritesRow category="Snack" data="Vegan Sausage" />
        <FavoritesRow category="Drink" data="Craft Beer" />
        <FavoritesRow category="Toy" data="Wood Stick" />
        <FavoritesRow category="Human" data="DaddyO" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesContainer: {
    width: "90%",
    paddingTop: "5%",
    paddingBottom: "5%",
    alignSelf: "center",
  },
  favoritesBackground: {
    backgroundColor: colors.background,
    width: "100%",
    borderRadius: 17,
    paddingTop: "3%",
    paddingBottom: "3%",
  },
});
