import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default = ({
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultWidth,
  property1DefaultHeight,
  soundTop,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("width", property1DefaultWidth),
      ...getStyleValue("height", property1DefaultHeight),
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultWidth,
    property1DefaultHeight,
  ]);

  const soundStyle = useMemo(() => {
    return {
      ...getStyleValue("top", soundTop),
    };
  }, [soundTop]);

  return (
    <View style={[styles.property1default, property1Default1Style]}>
      <View style={styles.soundRectangle} />
      <Text style={[styles.sound, styles.onClr, soundStyle]}>Sound</Text>
      <Text style={[styles.on, styles.onClr]}>On</Text>
      <Image
        style={styles.iconIonicIosVolumeHigh}
        resizeMode="cover"
        source={require("../assets/icon-ioniciosvolumehigh.png")}
      />
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
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1default: {
    width: 302,
    height: 65,
  },
});

export default Property1Default;
