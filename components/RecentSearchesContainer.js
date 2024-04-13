import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RecentSearchesContainer = ({ onRecentSearchesPress }) => {
  return (
    <Pressable
      style={[styles.recentSearches, styles.recentLayout]}
      onPress={onRecentSearchesPress}
    >
      <View style={[styles.recentSearchesRetangule, styles.recentLayout]} />
      <Text style={styles.recentSearches1}>Recent searches</Text>
      <Image
        style={styles.iconAwesomeHistory}
        resizeMode="cover"
        source={require("../assets/icon-awesomehistory.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  recentLayout: {
    height: 65,
    width: 302,
    position: "absolute",
  },
  recentSearchesRetangule: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
  },
  recentSearches1: {
    top: 26,
    left: 52,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  iconAwesomeHistory: {
    top: 23,
    left: 24,
    width: 19,
    height: 19,
    position: "absolute",
  },
  recentSearches: {
    top: 372,
    left: 37,
  },
});

export default RecentSearchesContainer;
