import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DeleteAccountForm = () => {
  return (
    <View style={[styles.deleteAccount, styles.deleteLayout]}>
      <View style={[styles.deleteRectangle, styles.deleteLayout]} />
      <Text style={styles.deleteAccount1}>Delete Account</Text>
      <Image
        style={styles.iconAwesomeTrashAlt}
        resizeMode="cover"
        source={require("../assets/icon-awesometrashalt.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  deleteLayout: {
    height: 65,
    width: 302,
    position: "absolute",
  },
  deleteRectangle: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
  },
  deleteAccount1: {
    top: 26,
    left: 51,
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  iconAwesomeTrashAlt: {
    top: 25,
    left: 25,
    width: 14,
    height: 16,
    position: "absolute",
  },
  deleteAccount: {
    top: 553,
    left: 37,
  },
});

export default DeleteAccountForm;
