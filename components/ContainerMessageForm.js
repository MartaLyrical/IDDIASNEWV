import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerMessageForm = ({ sedUtPerspiciatisTop }) => {
  const messageStyle = useMemo(() => {
    return {
      ...getStyleValue("top", sedUtPerspiciatisTop),
    };
  }, [sedUtPerspiciatisTop]);

  return (
    <View style={[styles.message, styles.messagePosition, messageStyle]}>
      <Image
        style={[styles.pathBackgroundIcon, styles.messagePosition]}
        resizeMode="cover"
        source={require("../assets/path-background.png")}
      />
      <Text style={styles.sedUtPerspiciatis}>Sed ut perspiciatis omnis.</Text>
      <Image
        style={styles.profileJohnDoe}
        resizeMode="cover"
        source={require("../assets/profile-john-doe.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  messagePosition: {
    height: 56,
    top: 0,
    position: "absolute",
  },
  pathBackgroundIcon: {
    left: 58,
    width: 218,
  },
  sedUtPerspiciatis: {
    top: 16,
    left: 90,
    fontSize: FontSize.size_sm,
    lineHeight: 24,
    fontFamily: FontFamily.arialMT,
    color: Color.colorWhite,
    textAlign: "left",
    width: 164,
    height: 16,
    position: "absolute",
  },
  profileJohnDoe: {
    top: 8,
    right: 236,
    bottom: 8,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  message: {
    left: 32,
    width: 276,
  },
});

export default ContainerMessageForm;
