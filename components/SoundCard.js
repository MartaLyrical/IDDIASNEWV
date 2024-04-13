import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SoundCard = () => {
  return (
    <View style={[styles.property1default, styles.soundRectangleLayout]}>
      <View style={[styles.soundRectangle, styles.soundRectangleLayout]} />
      <Text style={[styles.sound, styles.offPosition]}>Sound</Text>
      <Text style={[styles.off, styles.offPosition]}>Off</Text>
      <Image
        style={styles.iconIonicIosVolumeLow}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosvolumelow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  soundRectangleLayout: {
    height: 65,
    position: "absolute",
  },
  offPosition: {
    color: Color.colorWhite,
    top: "50%",
    position: "absolute",
  },
  soundRectangle: {
    width: "100%",
    right: "0%",
    bottom: 0,
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
  },
  sound: {
    marginTop: -9.5,
    left: "17.55%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
  },
  off: {
    marginTop: -7.5,
    left: "87.32%",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "right",
  },
  iconIonicIosVolumeLow: {
    height: "24.31%",
    width: "3.74%",
    top: "38.46%",
    right: "91.66%",
    bottom: "37.23%",
    left: "4.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1default: {
    top: 130,
    left: 20,
    width: 302,
  },
});

export default SoundCard;
