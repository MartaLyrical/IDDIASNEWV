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
const EditContainer1 = ({
  comparisonLabels,
  imageLabelId,
  faceImageUrl,
  loremIpsumDolorTop,
  checkMarkIconTextAlign,
}) => {
  const nameStyle = useMemo(() => {
    return {
      ...getStyleValue("top", loremIpsumDolorTop),
    };
  }, [loremIpsumDolorTop]);

  const sameFacesStyle = useMemo(() => {
    return {
      ...getStyleValue("textAlign", checkMarkIconTextAlign),
    };
  }, [checkMarkIconTextAlign]);

  return (
    <View style={[styles.name, styles.namePosition, nameStyle]}>
      <Text
        style={[styles.sameFaces, styles.sameFacesPosition, sameFacesStyle]}
      >
        {comparisonLabels}
      </Text>
      <Image
        style={[styles.sameFacesIcon, styles.namePosition]}
        resizeMode="cover"
        source={imageLabelId}
      />
      <Text style={[styles.loremIpsumDolor, styles.sameFacesPosition]}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor
      </Text>
      <Image
        style={styles.checkMarkIcon}
        resizeMode="cover"
        source={faceImageUrl}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  namePosition: {
    left: 36,
    position: "absolute",
  },
  sameFacesPosition: {
    textAlign: "left",
    left: 153,
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
    width: 88,
    height: 88,
  },
  loremIpsumDolor: {
    top: 34,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorBlack,
    width: 147,
    height: 59,
  },
  checkMarkIcon: {
    top: 39,
    left: 0,
    width: 20,
    height: 20,
    position: "absolute",
  },
  name: {
    top: 155,
    width: 300,
    height: 93,
  },
});

export default EditContainer1;
