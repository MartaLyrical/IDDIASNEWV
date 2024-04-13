import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const ContainerMessageForm1 = () => {
  return (
    <View style={[styles.message, styles.messageLayout]}>
      <Image
        style={[styles.pathBackground1Icon, styles.messageLayout]}
        resizeMode="cover"
        source={require("../assets/path-background1.png")}
      />
      <Text style={styles.excepteurSintOccaecat}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt.
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
    height: 113,
    position: "absolute",
  },
  pathBackground1Icon: {
    top: 0,
    left: 0,
    width: 248,
  },
  excepteurSintOccaecat: {
    top: 20,
    left: 24,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontFamily: FontFamily.arialMT,
    color: Color.colorWhite,
    textAlign: "left",
    width: 190,
    height: 65,
    position: "absolute",
  },
  profileJaneDoe: {
    top: 8,
    right: 0,
    bottom: 65,
    left: 258,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  message: {
    top: 76,
    left: 46,
    width: 298,
  },
});

export default ContainerMessageForm1;
