import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ButtonContinue = ({ propTop, onButtonContinuePress }) => {
  const buttonContinueStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <Pressable
      style={[styles.buttonContinue, buttonContinueStyle]}
      onPress={onButtonContinuePress}
    >
      <View style={styles.buttonContinueBk} />
      <Text style={styles.continue}>Continue</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContinueBk: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_100,
    borderStyle: "solid",
    borderColor: Color.colorGray_200,
    borderWidth: 1,
    position: "absolute",
  },
  continue: {
    top: "31.25%",
    left: "36.42%",
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  buttonContinue: {
    marginLeft: -150.5,
    top: 530,
    left: "50%",
    width: 302,
    height: 48,
    position: "absolute",
  },
});

export default ButtonContinue;
