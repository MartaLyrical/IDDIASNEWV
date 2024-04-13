import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const RecentGalleryContainer = () => {
  return (
    <View style={[styles.gallery, styles.galleryLayout1]}>
      <Image
        style={[styles.galleryChild, styles.galleryLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2619.png")}
      />
      <View style={[styles.galleryItem, styles.galleryLayout]} />
      <Image
        style={[styles.galleryInner, styles.galleryLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-2624.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.galleryLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-9204.png")}
      />
      <Image
        style={[styles.galleryChild1, styles.galleryChildPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-2617.png")}
      />
      <Image
        style={[styles.galleryChild2, styles.galleryChildPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-2622.png")}
      />
      <Image
        style={[styles.galleryChild3, styles.galleryChildPosition1]}
        resizeMode="cover"
        source={require("../assets/rectangle-9202.png")}
      />
      <Image
        style={[styles.galleryChild4, styles.galleryChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-2618.png")}
      />
      <Image
        style={[styles.galleryChild5, styles.galleryChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-2623.png")}
      />
      <Image
        style={[styles.galleryChild6, styles.galleryChildPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-9203.png")}
      />
      <View style={[styles.rectangleView, styles.galleryLayout1]} />
      <Text style={styles.recents}>Recents</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  galleryLayout1: {
    width: 312,
    position: "absolute",
  },
  galleryLayout: {
    height: 88,
    width: 91,
    top: 55,
    position: "absolute",
  },
  galleryChildPosition1: {
    top: 183,
    height: 88,
    width: 91,
    position: "absolute",
  },
  galleryChildPosition: {
    top: 311,
    height: 88,
    width: 91,
    position: "absolute",
  },
  galleryChild: {
    left: 0,
  },
  galleryItem: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorDimgray,
    borderWidth: 1,
    opacity: 0.6,
    left: 0,
  },
  galleryInner: {
    left: 111,
  },
  rectangleIcon: {
    left: 221,
  },
  galleryChild1: {
    left: 0,
  },
  galleryChild2: {
    left: 111,
  },
  galleryChild3: {
    left: 221,
  },
  galleryChild4: {
    left: 0,
  },
  galleryChild5: {
    left: 111,
  },
  galleryChild6: {
    left: 221,
  },
  rectangleView: {
    top: 0,
    backgroundColor: Color.colorLightseagreen_200,
    height: 45,
    left: 0,
  },
  recents: {
    top: 13,
    left: 16,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: 65,
    position: "absolute",
  },
  gallery: {
    top: 299,
    left: 32,
    height: 399,
  },
});

export default RecentGalleryContainer;
