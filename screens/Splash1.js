import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const Splash1 = () => {
  return (
    <View style={styles.splash1}>
      <Image
        style={[styles.mainBackgroundIcon, styles.iddiasPosition]}
        resizeMode="cover"
        source={require("../assets/main-background.png")}
      />
      <Image
        style={styles.iddias1mobileappWhiteIcon}
        resizeMode="cover"
        source={require("../assets/iddias1mobileappwhite.png")}
      />
      <Text style={[styles.byNliaDaniel, styles.iddiasTypo]}>
        © By Nélia Daniel Dias
      </Text>
      <View style={styles.iddiasRegistered}>
        <Image
          style={styles.iconMetroRegistered}
          resizeMode="cover"
          source={require("../assets/icon-metroregistered.png")}
        />
        <Text style={[styles.iddias, styles.iddiasTypo]}>IDDIAS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iddiasPosition: {
    left: 0,
    top: 0,
  },
  iddiasTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  mainBackgroundIcon: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  iddias1mobileappWhiteIcon: {
    marginLeft: -82.5,
    top: 275,
    width: 167,
    height: 188,
    left: "50%",
    position: "absolute",
  },
  byNliaDaniel: {
    marginLeft: -150.5,
    top: 713,
    fontSize: 24,
    textAlign: "center",
    width: 302,
    left: "50%",
  },
  iconMetroRegistered: {
    left: 108,
    width: 14,
    height: 14,
    top: 0,
    position: "absolute",
  },
  iddias: {
    fontSize: 32,
    textAlign: "right",
    left: 0,
    top: 0,
  },
  iddiasRegistered: {
    top: 635,
    left: 127,
    width: 122,
    height: 30,
    position: "absolute",
  },
  splash1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Splash1;
