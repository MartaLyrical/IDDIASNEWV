import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PersonCardForm1 = ({ rectangleIconTop }) => {
  const persons1Style = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleIconTop),
    };
  }, [rectangleIconTop]);

  return (
    <View style={[styles.persons, persons1Style]}>
      <View style={[styles.name, styles.namePosition]}>
        <Text style={styles.beatrizSilva}>Beatriz Silva</Text>
        <Image
          style={[styles.nameChild, styles.namePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-2612.png")}
        />
        <Text style={[styles.x, styles.xTypo]}>X</Text>
      </View>
      <View style={[styles.name1, styles.nameLayout]}>
        <Text style={styles.beatrizSilva}>Nelia Campos</Text>
        <Image
          style={[styles.nameChild, styles.namePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-2613.png")}
        />
        <Text style={[styles.x1, styles.x1Typo]}>X</Text>
      </View>
      <View style={[styles.name2, styles.nameLayout]}>
        <Text style={styles.beatrizSilva}>Luzia Beltrand</Text>
        <Image
          style={[styles.nameChild, styles.namePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-2614.png")}
        />
        <Text style={[styles.x1, styles.x1Typo]}>X</Text>
      </View>
      <View style={[styles.name3, styles.nameLayout]}>
        <Text style={styles.beatrizSilva}>Sofia Nabais</Text>
        <Image
          style={[styles.nameChild, styles.namePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-2615.png")}
        />
        <Text style={[styles.x1, styles.x1Typo]}>X</Text>
      </View>
      <View style={[styles.name4, styles.nameLayout]}>
        <Text style={[styles.conceioSousa, styles.xTypo]}>Conceição Sousa</Text>
        <Image
          style={[styles.nameChild, styles.namePosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-2616.png")}
        />
        <Text style={[styles.x4, styles.x1Typo]}>X</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  namePosition: {
    height: 88,
    left: 0,
    top: 0,
    position: "absolute",
  },
  xTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    top: 29,
    position: "absolute",
  },
  nameLayout: {
    width: 300,
    left: 1,
    height: 88,
    position: "absolute",
  },
  x1Typo: {
    left: 288,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  beatrizSilva: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    left: 117,
    top: 29,
    position: "absolute",
  },
  nameChild: {
    width: 88,
  },
  x: {
    left: 289,
  },
  name: {
    width: 301,
  },
  x1: {
    top: 29,
    left: 288,
  },
  name1: {
    top: 117,
  },
  name2: {
    top: 233,
  },
  name3: {
    top: 350,
  },
  conceioSousa: {
    left: 117,
    textAlign: "center",
  },
  x4: {
    top: 30,
  },
  name4: {
    top: 466,
  },
  persons: {
    height: 554,
    width: 301,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default PersonCardForm1;
