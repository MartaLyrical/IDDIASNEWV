import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AvatarImage from "./AvatarImage";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const ContainerHero = () => {
  return (
    <View style={styles.hero}>
      <AvatarImage
        avatarImageAvatar={require("../assets/profile.png")}
        avatarIconPosition="absolute"
        avatarIconTop={0}
        avatarIconLeft={0}
        avatarIconWidth={56}
      />
      <View style={styles.name}>
        <Text style={styles.neliaCampos}>Nelia Campos</Text>
        <Text style={[styles.lisbonPt, styles.lisbonPtTypo]}>Lisbon, PT</Text>
      </View>
      <Text style={[styles.hiMyName, styles.lisbonPtTypo]}>
        Hi! My name is Nelia Campos, I love nature, camping, taking fotos and
        literature. I'm a lawyer by profession.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  lisbonPtTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    textAlign: "left",
    lineHeight: 24,
    left: 0,
    position: "absolute",
  },
  neliaCampos: {
    top: 0,
    fontSize: FontSize.size_base,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorLightseagreen_100,
    textAlign: "left",
    lineHeight: 24,
    left: 0,
    position: "absolute",
  },
  lisbonPt: {
    top: 22,
    fontSize: FontSize.size_xs,
  },
  name: {
    top: 3,
    left: 69,
    width: 112,
    height: 46,
    position: "absolute",
  },
  hiMyName: {
    top: 84,
    fontSize: FontSize.size_sm,
    height: 75,
    width: 302,
  },
  hero: {
    top: 85,
    left: 36,
    height: 159,
    width: 302,
    position: "absolute",
  },
});

export default ContainerHero;
