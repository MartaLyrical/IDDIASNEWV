import * as React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const LanguageForm = ({ onLanguagePress }) => {
  return (
    <Pressable
      style={[styles.language, styles.languageLayout]}
      onPress={onLanguagePress}
    >
      <View style={[styles.languageRectangle, styles.languageLayout]} />
      <Text style={styles.language1}>Language</Text>
      <Text style={[styles.english, styles.englishPosition]}>English</Text>
      <Image
        style={[styles.iconAwesomeLanguage, styles.englishPosition]}
        resizeMode="cover"
        source={require("../assets/icon-awesomelanguage.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  languageLayout: {
    height: 65,
    width: 302,
    position: "absolute",
  },
  englishPosition: {
    top: 25,
    position: "absolute",
  },
  languageRectangle: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
  },
  language1: {
    top: 26,
    left: 52,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  english: {
    left: 244,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "right",
    color: Color.colorWhite,
  },
  iconAwesomeLanguage: {
    left: 15,
    width: 32,
    height: 16,
  },
  language: {
    top: 281,
    left: 37,
  },
});

export default LanguageForm;
