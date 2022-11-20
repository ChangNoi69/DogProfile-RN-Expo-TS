import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";

// Data
import { userNr1 } from "../../../data/users";

// Components
import { H1_Headline } from "../../components/Text/H1_Headline";
import { H3_Heading } from "../../components/Text/H3_Heading";
import { colors } from "../../infrastructure/theme/colors";

type LastPoopLocation_Row_ComponentProps = {
  text: string;
};

export const PoopRow: React.FC<LastPoopLocation_Row_ComponentProps> = (props) => {
  return (
    <View style={styles.row}>
      <H3_Heading text={props.text} style={styles.poopText} />
    </View>
  );
};

export const LastPoopLocation: React.FC = () => {
  return (
    <View style={styles.container}>
      <H1_Headline text="Last Poop Locations" />
      <ScrollView
        nestedScrollEnabled={true}
        alwaysBounceVertical={true}
        style={styles.scrollViewStyle}
        contentContainerStyle={styles.scrollViewContentContainerStyle}
      >
        {/* Map the Data array of the last poop*/}
        {userNr1.poopLocations.map((singleLocation, index) => {
          return (
            <PoopRow
              key={index}
              text={`${singleLocation.street} - ${singleLocation.date} - ${singleLocation.latitude} - ${singleLocation.latitude}`}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    paddingTop: "5%",
    paddingBottom: "5%",
    alignSelf: "center",
  },

  scrollViewStyle: {
    height: 400,
    // overflow: "hidden",

    borderColor: colors.scrollView_border,
    borderWidth: 2,
    borderRadius: 20,

    backgroundColor: colors.background,
  },
  scrollViewContentContainerStyle: {},
  row: {
    height: 50,
    flexDirection: "row",

    borderBottomWidth: 2,
    borderBottomColor: colors.scrollView_border,
    backgroundColor: colors.scrollView_rowBackGround,

    justifyContent: "center",
  },
  poopText: {
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 14,

    color: colors.scrollView_text,
  },
});
