import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const ContainerInput = () => {
  return (
    <View style={[styles.input, styles.inputLayout]}>
      <View style={[styles.inputRectangleChat, styles.inputLayout]} />
      <Text style={styles.saySomething}>Say something…</Text>
      <Image
        style={styles.fowardArrowIcon}
        resizeMode="cover"
        source={require("../assets/foward-arrow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputLayout: {
    height: 56,
    width: 375,
    left: 0,
    position: "absolute",
  },
  inputRectangleChat: {
    top: 0,
    backgroundColor: Color.colorDarkgray_200,
    opacity: 0.2,
  },
  saySomething: {
    top: 19,
    left: 35,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.quicksandSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  fowardArrowIcon: {
    height: "35.71%",
    width: "6.11%",
    top: "39.29%",
    right: "8.29%",
    bottom: "25%",
    left: "85.6%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  input: {
    top: 573,
  },
});

export default ContainerInput;
