import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HelpContainer = ({ onHelpPress }) => {
  return (
    <Pressable style={[styles.help, styles.helpLayout]} onPress={onHelpPress}>
      <View style={[styles.helpRectangle, styles.helpLayout]} />
      <Text style={[styles.help1, styles.help1Clr]}>Help</Text>
      <Text style={[styles.questions, styles.help1Clr]}>Questions?</Text>
      <Image
        style={styles.questionMarkIcon}
        resizeMode="cover"
        source={require("../assets/question-mark.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  helpLayout: {
    height: 65,
    width: 302,
    position: "absolute",
  },
  help1Clr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  helpRectangle: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
  },
  help1: {
    top: 26,
    left: 52,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
  },
  questions: {
    top: 25,
    left: 221,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "right",
  },
  questionMarkIcon: {
    height: "24.62%",
    width: "5.3%",
    top: "38.46%",
    right: "86.75%",
    bottom: "36.92%",
    left: "7.95%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  help: {
    top: 644,
    left: 37,
  },
});

export default HelpContainer;
