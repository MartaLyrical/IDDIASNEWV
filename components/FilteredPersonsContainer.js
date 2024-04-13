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
const FilteredPersonsContainer = ({
  imageId,
  imageDescription,
  imageDimensions,
  imageDimensionsText,
  imageSize,
  imageCode,
  imageDimensionsText2,
  imageIdentifier,
  loremIpsumDolorLeft,
}) => {
  const persons2Style = useMemo(() => {
    return {
      ...getStyleValue("left", loremIpsumDolorLeft),
    };
  }, [loremIpsumDolorLeft]);

  return (
    <View style={[styles.persons, persons2Style]}>
      <View style={[styles.name, styles.nameLayout]}>
        <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
          Mike Fuller
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
          Lorem ipsum dolor sit ame
        </Text>
        <Image
          style={styles.profileCircleIcon}
          resizeMode="cover"
          source={imageId}
        />
      </View>
      <View style={[styles.name1, styles.nameLayout]}>
        <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
          John Doe
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
          Lorem ipsum dolor sit ame
        </Text>
        <Image
          style={styles.profileCircleIcon}
          resizeMode="cover"
          source={imageDescription}
        />
      </View>
      <View style={[styles.name2, styles.nameLayout]}>
        <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
          Jason Caleb
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
          Lorem ipsum dolor sit ame
        </Text>
        <Image
          style={styles.profileCircleIcon}
          resizeMode="cover"
          source={imageDimensions}
        />
      </View>
      <View style={[styles.name3, styles.nameLayout]}>
        <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
          Family Group
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
          Lorem ipsum dolor sit ame
        </Text>
        <Image
          style={styles.profileCircleIcon}
          resizeMode="cover"
          source={imageDimensionsText}
        />
      </View>
      <View style={[styles.name4, styles.nameLayout]}>
        <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
          Nelia Campos
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
          Lorem ipsum dolor sit ame
        </Text>
        <Image
          style={styles.profileCircleIcon}
          resizeMode="cover"
          source={imageSize}
        />
      </View>
      <View style={[styles.name5, styles.nameLayout]}>
        <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
          Julia Mendes
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
          Lorem ipsum dolor sit ame
        </Text>
        <Image
          style={styles.profileCircleIcon}
          resizeMode="cover"
          source={imageCode}
        />
      </View>
      <View style={[styles.name6, styles.nameLayout]}>
        <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
          Rui Patalim
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
          Lorem ipsum dolor sit ame
        </Text>
        <Image
          style={styles.profileCircleIcon}
          resizeMode="cover"
          source={imageDimensionsText2}
        />
      </View>
      <View style={[styles.name7, styles.nameLayout]}>
        <Text style={[styles.mikeFuller, styles.mikeFullerPosition]}>
          Sonia Ferreira
        </Text>
        <Text style={[styles.loremIpsumDolor, styles.mikeFullerPosition]}>
          Lorem ipsum dolor sit ame
        </Text>
        <Image
          style={styles.profileCircleIcon}
          resizeMode="cover"
          source={imageIdentifier}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameLayout: {
    height: 52,
    left: 0,
    width: 245,
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
    left: 0,
    position: "absolute",
  },
  name: {
    top: 0,
  },
  name1: {
    top: 67,
  },
  name2: {
    top: 134,
  },
  name3: {
    top: 201,
  },
  name4: {
    top: 268,
  },
  name5: {
    top: 335,
  },
  name6: {
    top: 402,
  },
  name7: {
    top: 469,
  },
  persons: {
    top: 187,
    left: 44,
    height: 521,
    width: 245,
    position: "absolute",
  },
});

export default FilteredPersonsContainer;
