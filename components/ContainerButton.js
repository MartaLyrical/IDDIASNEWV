import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ContainerButton = ({ onBackPress, onYesPress }) => {
  return (
    <View style={styles.buttons}>
      <Pressable style={styles.back} onPress={onBackPress}>
        <View style={[styles.backRectangle, styles.rectangleShadowBox]} />
        <Text style={[styles.back1, styles.yes1Typo]}>Back</Text>
      </Pressable>
      <Pressable style={styles.yes} onPress={onYesPress}>
        <View style={[styles.yesRectangle, styles.rectangleShadowBox]} />
        <Text style={[styles.yes1, styles.yes1Typo]}>Yes</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowColor: "rgba(38, 153, 251, 0.1)",
    borderRadius: Border.br_3xs,
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  yes1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    top: 13,
    position: "absolute",
  },
  backRectangle: {
    backgroundColor: Color.colorLightgray_100,
  },
  back1: {
    left: 31,
    color: Color.colorBlack,
  },
  back: {
    right: 147,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  yesRectangle: {
    backgroundColor: Color.colorRed,
  },
  yes1: {
    left: 37,
    color: Color.colorWhite,
  },
  yes: {
    left: 147,
    right: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  buttons: {
    top: 115,
    right: 24,
    bottom: 21,
    left: 24,
    position: "absolute",
  },
});

export default ContainerButton;
