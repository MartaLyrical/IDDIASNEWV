import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <Image
        style={styles.mainBackgroundIcon}
        resizeMode="cover"
        source={require("../assets/main-background.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainBackgroundIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 375,
    height: 812,
  },
  splash: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default Splash;
