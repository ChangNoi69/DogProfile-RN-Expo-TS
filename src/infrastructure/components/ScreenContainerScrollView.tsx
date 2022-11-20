import React from "react";
import { ScrollView, StyleSheet, SafeAreaView, FlatList, View, Platform } from "react-native";
import { colors } from "../theme/colors";

export function ScreenContainerScrollView(props: any) {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.scrollViewStyle}
        nestedScrollEnabled={true}
      >
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.app_Background,
    // height: 5000,
    // alignItems: "center",
  },
  scrollViewStyle: {},
  scrollViewContentContainerStyle: {},
});
