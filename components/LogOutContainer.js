import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LogOutContainer = () => {
  return (
    <View style={[styles.logOut, styles.logOutLayout]}>
      <View style={[styles.logoutRectangle, styles.logOutLayout]} />
      <Text style={[styles.logOut1, styles.logOut1Position]}>Log Out</Text>
      <Image
        style={[styles.iconOpenAccountLogout, styles.logOut1Position]}
        resizeMode="cover"
        source={require("../assets/icon-openaccountlogout.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logOutLayout: {
    height: 65,
    width: 302,
    position: "absolute",
  },
  logOut1Position: {
    top: 26,
    position: "absolute",
  },
  logoutRectangle: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
  },
  logOut1: {
    left: 52,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  iconOpenAccountLogout: {
    left: 24,
    width: 16,
    height: 14,
  },
  logOut: {
    top: 463,
    left: 37,
  },
});

export default LogOutContainer;
