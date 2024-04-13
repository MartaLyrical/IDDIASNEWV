import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const GalleryContainer = () => {
  return (
    <View style={styles.gallery}>
      <Text style={styles.gallery1}>Gallery</Text>
      <Image
        style={[styles.galleryChild, styles.galleryLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-261.png")}
      />
      <Image
        style={[styles.galleryItem, styles.galleryLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-262.png")}
      />
      <Image
        style={[styles.galleryInner, styles.galleryLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle-920.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryLayout: {
    height: 88,
    width: 88,
    top: 48,
    position: "absolute",
  },
  gallery1: {
    top: 0,
    left: 123,
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorLightseagreen_200,
    textAlign: "center",
    position: "absolute",
  },
  galleryChild: {
    left: 0,
  },
  galleryItem: {
    left: 107,
  },
  galleryInner: {
    left: 214,
  },
  gallery: {
    top: 253,
    left: 36,
    width: 302,
    height: 136,
    position: "absolute",
  },
});

export default GalleryContainer;
