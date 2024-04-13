import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import SoundCard from "./SoundCard";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SoundButton = () => {
  return (
    <View style={styles.soundButton}>
      <View style={styles.property1default}>
        <View style={styles.soundRectangle} />
        <Text style={[styles.sound, styles.onClr]}>Sound</Text>
        <Text style={[styles.on, styles.onClr]}>On</Text>
        <Image
          style={styles.iconIonicIosVolumeHigh}
          resizeMode="cover"
          source={require("../assets/icon-ioniciosvolumehigh.png")}
        />
      </View>
      <SoundCard />
    </View>
  );
};

const styles = StyleSheet.create({
  onClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  soundRectangle: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
    position: "absolute",
  },
  sound: {
    top: "35.38%",
    left: "17.55%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
  },
  on: {
    top: "38.46%",
    left: "87.98%",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "right",
  },
  iconIonicIosVolumeHigh: {
    height: "34.62%",
    width: "8.91%",
    top: "32.31%",
    right: "86.49%",
    bottom: "33.08%",
    left: "4.6%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  property1default: {
    top: 20,
    left: 20,
    width: 302,
    height: 65,
    position: "absolute",
  },
  soundButton: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 342,
    height: 215,
    overflow: "hidden",
  },
});

export default SoundButton;
