import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

// Libraries
import { Provider as PaperProvider } from "react-native-paper";

// Fonts
import {
  useFonts as useQuicksandFont,
  Quicksand_400Regular,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

// Import Data
import { userNr1 } from "./data/users";

// Components
import { ScreenContainerScrollView } from "./src/infrastructure/components/ScreenContainerScrollView";
import { Header } from "./src/Features/header/Header";
import { Favorites } from "./src/Features/Favorites/Favorites";
import { Specialty } from "./src/Features/speacilty/components/Specialty";
import { LastPoopLocation } from "./src/Features/poopLocations/LastPoopLocations";
import { FriendInviteButton } from "./src/Features/friendInvite/friendInvite";

export default function App() {
  // Loading Fonts ------------------------------------------------------------------------
  const [quicksandFontsLoaded] = useQuicksandFont({
    Quicksand_400Regular,
    Quicksand_700Bold,
  });
  if (!quicksandFontsLoaded) {
    return <Text>"Fonts Loading"</Text>;
  } else {
    return (
      <PaperProvider>
        <ScreenContainerScrollView>
          <Header name={userNr1.name} />
          <Favorites />
          <Specialty />
          <LastPoopLocation />
          <FriendInviteButton />
        </ScreenContainerScrollView>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({});
