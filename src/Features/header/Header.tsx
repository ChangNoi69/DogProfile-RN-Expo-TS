import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

// Components
import { H1_Headline } from "../../components/Text/H1_Headline";
import { colors } from "../../infrastructure/theme/colors";
import { fonts } from "../../infrastructure/theme/fonts";

// Import Styles

type HeaderComponentProps = {
  name: string;
};

export const Header: React.FC<HeaderComponentProps> = (props) => {
  return (
    <View style={styles.profileHeader}>
      <Image source={require("../../../assets/profilePicture.jpg")} style={styles.profilePicture}></Image>
      <H1_Headline style={styles.userName} text={props.name} />
    </View>
  );
};

const profilePictureSize: number = 120;
const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: colors.primary,
    flex: 1,

    alignItems: "center",
    marginTop: "3%",
    paddingBottom: "3%",
  },
  profilePicture: {
    height: profilePictureSize,
    width: profilePictureSize,

    marginTop: "5%",
    borderRadius: profilePictureSize / 2,
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 7,
  },
  userName: {
    paddingTop: 10,
    fontFamily: fonts.H1_FONT,
    fontSize: 20,
  },
});
