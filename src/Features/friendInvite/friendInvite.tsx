import React, { useState, useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";

// Data
import { userNr1 } from "../../../data/users";

// Styling
import { colors } from "../../infrastructure/theme/colors";

// Components
import { H3_Heading } from "../../components/Text/H3_Heading";
import { Button } from "react-native-paper";
import { InviteSuccessBox } from "./components/InviteSuccessBox";

export const FriendInviteButton: React.FC = (props: any) => {
  const [showSuccessBox, setShowSuccessBox] = useState(false);

  // For animation
  const fadeAnim = useRef(new Animated.Value(100)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  const onBTN_FriendInvite_Pressed = () => {
    setShowSuccessBox(true);

    fadeIn();
    setTimeout(() => {
      fadeOut();
    }, 3000);
  };

  return (
    <View style={styles.mainContainer}>
      <Button
        contentStyle={styles.inviteButtonContent}
        style={styles.inviteButton}
        labelStyle={styles.labelStyle}
        icon={"account-plus"}
        mode="outlined"
        onPress={() => onBTN_FriendInvite_Pressed()}
      >
        Send Friend Invite
      </Button>

      <Animated.View
        style={[
          styles.animatedContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        {showSuccessBox ? <InviteSuccessBox /> : null}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: 150,
    width: "70%",
    alignSelf: "center",
  },
  animatedContainer: {
    flex: 1,
  },
  inviteButton: {
    height: "28%",
    width: "100%",
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignSelf: "center",
    borderWidth: 0,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  inviteButtonContent: {},
  labelStyle: {
    fontSize: 16,
    color: colors.text_headline,
  },
});

//
