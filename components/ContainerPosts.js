import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerPosts = ({ titleTop }) => {
  const postsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", titleTop),
    };
  }, [titleTop]);

  return (
    <View style={[styles.posts, postsStyle]}>
      <Text style={[styles.excepteurSintOccaecat, styles.hAgoTypo]}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim.
      </Text>
      <View style={styles.title}>
        <Text style={[styles.hAgo, styles.hAgoTypo]}>1h ago</Text>
        <Text style={[styles.nameSurname, styles.hAgoTypo]}>Name Surname</Text>
        <Image
          style={[styles.profileIcon, styles.maskGroup1Position]}
          resizeMode="cover"
          source={require("../assets/profile4.png")}
        />
      </View>
      <Image
        style={[styles.maskGroup1, styles.maskGroup1Position]}
        resizeMode="cover"
        source={require("../assets/mask-group-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hAgoTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  maskGroup1Position: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  excepteurSintOccaecat: {
    top: 276,
    left: 24,
    width: 292,
    height: 56,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  hAgo: {
    top: 7,
    left: 259,
    fontFamily: FontFamily.quicksandRegular,
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  nameSurname: {
    top: 6,
    left: 47,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorBlack,
    lineHeight: 24,
    fontSize: FontSize.size_sm,
  },
  profileIcon: {
    width: 36,
    height: 36,
  },
  title: {
    top: 220,
    left: 14,
    width: 304,
    height: 36,
    position: "absolute",
  },
  maskGroup1: {
    height: 200,
    width: 340,
  },
  posts: {
    top: 400,
    height: 332,
    width: 340,
    left: 0,
    position: "absolute",
  },
});

export default ContainerPosts;
