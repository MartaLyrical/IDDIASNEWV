import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Connect = ({
  connectPosition,
  connectWidth,
  connectHeight,
  connectTop,
  connectRight,
  connectBottom,
  connectLeft,
  iDFontFamily,
  iDFontWeight,
}) => {
  const connectStyle = useMemo(() => {
    return {
      ...getStyleValue("position", connectPosition),
      ...getStyleValue("width", connectWidth),
      ...getStyleValue("height", connectHeight),
      ...getStyleValue("top", connectTop),
      ...getStyleValue("right", connectRight),
      ...getStyleValue("bottom", connectBottom),
      ...getStyleValue("left", connectLeft),
    };
  }, [
    connectPosition,
    connectWidth,
    connectHeight,
    connectTop,
    connectRight,
    connectBottom,
    connectLeft,
  ]);

  const iDStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", iDFontFamily),
      ...getStyleValue("fontWeight", iDFontWeight),
    };
  }, [iDFontFamily, iDFontWeight]);

  return (
    <View style={[styles.connect, connectStyle]}>
      <View style={styles.connectChild} />
      <Text style={[styles.id, iDStyle]}>ID</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  connectChild: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDodgerblue,
    position: "absolute",
  },
  id: {
    top: 2,
    left: 23,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  connect: {
    width: 60,
    height: 30,
  },
});

export default Connect;
