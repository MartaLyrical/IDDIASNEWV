import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const InterestsForm = () => {
  return (
    <View style={styles.interests}>
      <Text style={styles.interests1}>Interests</Text>
      <Image
        style={[styles.interestsChild, styles.interestsLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2611.png")}
      />
      <Image
        style={[styles.interestsItem, styles.interestsLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2621.png")}
      />
      <Image
        style={[styles.interestsInner, styles.interestsLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-9201.png")}
      />
      <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor
      </Text>
      <Text
        style={[styles.loremIpsumDolor1, styles.loremTypo]}
      >{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor `}</Text>
      <Text style={[styles.loremIpsumDolor2, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  interestsLayout: {
    height: 88,
    width: 88,
    top: 48,
    position: "absolute",
  },
  loremTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_3xs,
    top: 156,
    height: 88,
    width: 88,
    position: "absolute",
  },
  interests1: {
    top: 0,
    left: 117,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorLightseagreen_200,
    textAlign: "center",
    position: "absolute",
  },
  interestsChild: {
    left: 0,
  },
  interestsItem: {
    left: 107,
  },
  interestsInner: {
    left: 214,
  },
  loremIpsumDolor: {
    left: 0,
  },
  loremIpsumDolor1: {
    left: 107,
  },
  loremIpsumDolor2: {
    left: 214,
  },
  interests: {
    top: 414,
    left: 36,
    width: 302,
    height: 244,
    position: "absolute",
  },
});

export default InterestsForm;
