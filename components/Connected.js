import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Connected = ({
  connectedPosition,
  connectedWidth,
  connectedHeight,
  connectedTop,
  connectedRight,
  connectedBottom,
  connectedLeft,
  iDIDFontFamily,
  iDIDFontWeight,
}) => {
  const connectedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", connectedPosition),
      ...getStyleValue("width", connectedWidth),
      ...getStyleValue("height", connectedHeight),
      ...getStyleValue("top", connectedTop),
      ...getStyleValue("right", connectedRight),
      ...getStyleValue("bottom", connectedBottom),
      ...getStyleValue("left", connectedLeft),
    };
  }, [
    connectedPosition,
    connectedWidth,
    connectedHeight,
    connectedTop,
    connectedRight,
    connectedBottom,
    connectedLeft,
  ]);

  const iDIDStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", iDIDFontFamily),
      ...getStyleValue("fontWeight", iDIDFontWeight),
    };
  }, [iDIDFontFamily, iDIDFontWeight]);

  return (
    <View style={[styles.connected, connectedStyle]}>
      <View style={styles.connectedChild} />
      <Text style={[styles.idid, iDIDStyle]}>IDID</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  connectedChild: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorBlue,
    position: "absolute",
  },
  idid: {
    top: 2,
    left: 16,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  connected: {
    width: 60,
    height: 30,
  },
});

export default Connected;
