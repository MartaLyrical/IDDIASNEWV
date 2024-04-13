import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PersonCardForm = ({ rectangleIconTop }) => {
  const personsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleIconTop),
    };
  }, [rectangleIconTop]);

  return (
    <View style={[styles.persons, personsStyle]}>
      <View style={[styles.name, styles.namePosition1]}>
        <Text style={[styles.beatrizSilva, styles.beatrizSilvaTypo]}>
          Beatriz Silva
        </Text>
        <Image
          style={[styles.nameChild, styles.namePosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-2612.png")}
        />
      </View>
      <View style={[styles.name1, styles.nameLayout]}>
        <Text style={[styles.beatrizSilva, styles.beatrizSilvaTypo]}>
          Nelia Campos
        </Text>
        <Image
          style={[styles.nameChild, styles.namePosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-2613.png")}
        />
      </View>
      <View style={[styles.name2, styles.nameLayout]}>
        <Text style={[styles.beatrizSilva, styles.beatrizSilvaTypo]}>
          Luzia Beltrand
        </Text>
        <Image
          style={[styles.nameChild, styles.namePosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-2614.png")}
        />
      </View>
      <View style={[styles.name3, styles.namePosition]}>
        <Text style={[styles.beatrizSilva, styles.beatrizSilvaTypo]}>
          Sofia Nabais
        </Text>
        <Image
          style={[styles.nameChild, styles.namePosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-2615.png")}
        />
      </View>
      <View style={[styles.name4, styles.namePosition]}>
        <Text style={[styles.conceioSousa, styles.beatrizSilvaTypo]}>
          Conceição Sousa
        </Text>
        <Image
          style={[styles.nameChild, styles.namePosition1]}
          resizeMode="cover"
          source={require("../assets/rectangle-2616.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  namePosition1: {
    height: 88,
    left: 0,
    top: 0,
    position: "absolute",
  },
  beatrizSilvaTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    lineHeight: 24,
    fontSize: FontSize.size_base,
    left: 117,
    top: 29,
    position: "absolute",
  },
  nameLayout: {
    width: 229,
    left: 1,
    height: 88,
    position: "absolute",
  },
  namePosition: {
    left: 1,
    height: 88,
    position: "absolute",
  },
  beatrizSilva: {
    textAlign: "left",
  },
  nameChild: {
    width: 88,
  },
  name: {
    width: 215,
  },
  name1: {
    top: 117,
  },
  name2: {
    top: 233,
  },
  name3: {
    top: 350,
    width: 218,
  },
  conceioSousa: {
    textAlign: "center",
  },
  name4: {
    top: 466,
    width: 254,
  },
  persons: {
    width: 255,
    height: 554,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default PersonCardForm;
