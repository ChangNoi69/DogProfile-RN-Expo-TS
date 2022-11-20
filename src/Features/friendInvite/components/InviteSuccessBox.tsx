import { View, Text, StyleSheet } from "react-native";
import React from "react";

// Colors
import { colors } from "../../../infrastructure/theme/colors";
import { H3_Heading } from "../../../components/Text/H3_Heading";

// Components

export function InviteSuccessBox() {
  return (
    <View
      style={[
        styles.box,
        {
          shadowOffset: {
            width: 8,
            height: 10,
          },
          shadowOpacity: 0.5,
          shadowRadius: 10,
        },
      ]}
    >
      <H3_Heading text="Friendsrequest sent" />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.success,
    height: "30%",
    width: "90%",
    marginTop: "10%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: colors.success,
  },
});
