import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Send = ({
  component41Position,
  component41Top,
  component41Right,
  component41Bottom,
  component41Left,
  sendFontFamily,
  sendFontWeight,
  onSendPress,
}) => {
  const component41Style = useMemo(() => {
    return {
      ...getStyleValue("position", component41Position),
      ...getStyleValue("top", component41Top),
      ...getStyleValue("right", component41Right),
      ...getStyleValue("bottom", component41Bottom),
      ...getStyleValue("left", component41Left),
    };
  }, [
    component41Position,
    component41Top,
    component41Right,
    component41Bottom,
    component41Left,
  ]);

  const sendStyle = useMemo(() => {
    return {
      ...getStyleValue("fontFamily", sendFontFamily),
      ...getStyleValue("fontWeight", sendFontWeight),
    };
  }, [sendFontFamily, sendFontWeight]);

  return (
    <View onPress={onSendPress}>
      <View style={styles.component41Child} />
      <Text style={[styles.send, sendStyle]}>Send</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  component41Child: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
    position: "absolute",
  },
  send: {
    top: 3,
    left: 11,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
});

export default Send;
