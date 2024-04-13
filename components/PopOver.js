import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import ContainerButton from "./ContainerButton";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PopOver = ({
  popOverPosition,
  popOverTop,
  popOverLeft,
  onBackPress,
  onYesPress,
}) => {
  const popOverStyle = useMemo(() => {
    return {
      ...getStyleValue("position", popOverPosition),
      ...getStyleValue("top", popOverTop),
      ...getStyleValue("left", popOverLeft),
    };
  }, [popOverPosition, popOverTop, popOverLeft]);

  return (
    <View style={[styles.popOver, popOverStyle]}>
      <View style={styles.popOverChild} />
      <Text style={styles.areYouSure}>{`Are you sure you want to
log out?`}</Text>
      <ContainerButton
        onBackPress={() => navigation.navigate("Settings")}
        onYesPress={() => navigation.navigate("Splash")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  popOverChild: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    position: "absolute",
  },
  areYouSure: {
    top: 35,
    left: 39,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  popOver: {
    width: 295,
    height: 176,
  },
});

export default PopOver;
