import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={[styles.message, styles.messageLayout]}>
      <Image
        style={[styles.pathBackground1Icon, styles.messageLayout]}
        resizeMode="cover"
        source={require("../assets/path-background11.png")}
      />
      <Text style={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet, consectetur.
      </Text>
      <Image
        style={styles.profileJaneDoe}
        resizeMode="cover"
        source={require("../assets/profile-jane-doe.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messageLayout: {
    height: 89,
    position: "absolute",
  },
  pathBackground1Icon: {
    top: 0,
    left: 0,
    width: 248,
  },
  loremIpsumDolor: {
    top: 20,
    left: 24,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontFamily: FontFamily.arialMT,
    color: Color.colorWhite,
    textAlign: "left",
    width: 190,
    height: 41,
    position: "absolute",
  },
  profileJaneDoe: {
    top: 8,
    right: 0,
    bottom: 41,
    left: 257,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  message: {
    top: 316,
    left: 47,
    width: 297,
  },
});

export default FormContainer;
