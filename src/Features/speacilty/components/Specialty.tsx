import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Data
import { userNr1 } from "../../../../data/users";

// Styling
import { colors } from "../../../infrastructure/theme/colors";

// Components
import { H3_Heading } from "../../../components/Text/H3_Heading";

// type SpecialtyComponentProps = {
//   specialtySlogan: string;
// };

export const Specialty: React.FC = (props) => {
  return (
    <View style={styles.specialtyBackground}>
      <H3_Heading text={userNr1.specialtySlogan} />
    </View>
  );
};

{
  /* <H1_Headline style={styles.userName} text={props.name} /> */
}
const profilePictureSize: number = 120;
const styles = StyleSheet.create({
  specialtyBackground: {
    backgroundColor: colors.primary,
    height: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "4%",
  },
});
