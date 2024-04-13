import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EditContainer = ({
  featureImageUrl,
  faceImageUrl,
  loremIpsumDolorTop,
  loremIpsumDolorLeft,
  propTextAlign,
}) => {
  const name2Style = useMemo(() => {
    return {
      ...getStyleValue("top", loremIpsumDolorTop),
      ...getStyleValue("left", loremIpsumDolorLeft),
    };
  }, [loremIpsumDolorTop, loremIpsumDolorLeft]);

  const sameFaces1Style = useMemo(() => {
    return {
      ...getStyleValue("textAlign", propTextAlign),
    };
  }, [propTextAlign]);

  return (
    <View style={[styles.name, name2Style]}>
      <Text
        style={[styles.sameFaces, styles.sameFacesPosition, sameFaces1Style]}
      >
        {featureImageUrl}
      </Text>
      <Image
        style={styles.sameFacesIcon}
        resizeMode="cover"
        source={faceImageUrl}
      />
      <Text style={[styles.loremIpsumDolor, styles.sameFacesPosition]}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sameFacesPosition: {
    textAlign: "left",
    left: 117,
    position: "absolute",
  },
  sameFaces: {
    top: 0,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorLightseagreen_100,
  },
  sameFacesIcon: {
    top: 5,
    left: 0,
    width: 88,
    height: 88,
    position: "absolute",
  },
  loremIpsumDolor: {
    top: 34,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorBlack,
    width: 185,
    height: 59,
  },
  name: {
    top: 155,
    left: 36,
    width: 302,
    height: 93,
    position: "absolute",
  },
});

export default EditContainer;
