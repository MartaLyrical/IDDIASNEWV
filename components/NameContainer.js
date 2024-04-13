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
const NameContainer = ({ personName, profileImageId, propTop }) => {
  const name1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.name, styles.namePosition, name1Style]}>
      <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
        {personName}
      </Text>
      <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
        Lorem ipsum dolor sit ame
      </Text>
      <Image
        style={[styles.profileCircleIcon, styles.namePosition]}
        resizeMode="cover"
        source={profileImageId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  namePosition: {
    left: 0,
    position: "absolute",
  },
  mikeFullerPosition: {
    textAlign: "left",
    left: 60,
    position: "absolute",
  },
  mikeFuller: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorLightseagreen_100,
    top: 0,
  },
  loremIpsumDolor: {
    top: 30,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorBlack,
    width: 185,
    height: 22,
  },
  profileCircleIcon: {
    top: 4,
    width: 40,
    height: 40,
  },
  name: {
    width: 245,
    height: 52,
    top: 0,
  },
});

export default NameContainer;
