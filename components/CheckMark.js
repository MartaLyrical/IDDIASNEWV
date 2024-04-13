import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const CheckMark = () => {
  return (
    <View style={styles.checkMark}>
      <Image
        style={[styles.property1checkCircleIcon, styles.circleIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1checkcircle.png")}
      />
      <Image
        style={[styles.property1emptyCheckCircleIcon, styles.circleIconLayout]}
        resizeMode="cover"
        source={require("../assets/property-1emptycheckcircle.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  circleIconLayout: {
    height: 20,
    width: 20,
    left: 20,
    position: "absolute",
  },
  property1checkCircleIcon: {
    top: 20,
  },
  property1emptyCheckCircleIcon: {
    top: 69,
  },
  checkMark: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 82,
    height: 109,
    overflow: "hidden",
  },
});

export default CheckMark;
