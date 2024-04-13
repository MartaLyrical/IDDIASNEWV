import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Container from "./Container";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, Border, FontFamily } from "../GlobalStyles";

const DeletePopOver = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.deletePopover}>
      <Container />
      <View style={styles.property1deletePopover}>
        <View style={styles.deletePopoverRectangle} />
        <Text
          style={[styles.deleteYourIddiasAccount, styles.yourTypo]}
        >{`Delete your IDDIAS
account permanently?`}</Text>
        <Text
          style={[styles.youllLoseYour, styles.yourTypo]}
        >{`You'll lose your data and
history in the IDDIAS app.`}</Text>
        <View style={styles.buttons}>
          <Pressable
            style={[styles.back, styles.backPosition]}
            onPress={() => navigation.navigate("Settings")}
          >
            <View style={[styles.backChild, styles.childShadowBox]} />
            <Text style={[styles.back1, styles.back1Typo]}>Back</Text>
          </Pressable>
          <View style={[styles.deleteAccount, styles.backPosition]}>
            <View style={[styles.deleteAccountChild, styles.childShadowBox]} />
            <Text style={[styles.deleteAccount1, styles.back1Typo]}>
              Delete account
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yourTypo: {
    textAlign: "center",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  backPosition: {
    height: "38.1%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  childShadowBox: {
    shadowColor: "rgba(38, 153, 251, 0.1)",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  back1Typo: {
    fontSize: FontSize.size_base,
    top: "32.5%",
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  deletePopoverRectangle: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 1,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 30,
    },
    borderRadius: Border.br_3xs,
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  deleteYourIddiasAccount: {
    top: "8.33%",
    left: "17.02%",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  youllLoseYour: {
    top: "28.33%",
    left: "11.93%",
    fontWeight: "300",
    fontFamily: FontFamily.quicksandLight,
    textAlign: "center",
    fontSize: FontSize.size_lg,
  },
  backChild: {
    backgroundColor: Color.colorLightgray_100,
  },
  back1: {
    left: "40.5%",
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    top: "32.5%",
  },
  back: {
    bottom: "61.9%",
    height: "38.1%",
    top: "0%",
  },
  deleteAccountChild: {
    backgroundColor: Color.colorRed,
  },
  deleteAccount1: {
    left: "20.5%",
    color: Color.colorWhite,
  },
  deleteAccount: {
    top: "61.9%",
    bottom: "0%",
    height: "38.1%",
  },
  buttons: {
    height: "35%",
    width: "67.8%",
    top: "54.33%",
    right: "15.93%",
    bottom: "10.67%",
    left: "16.27%",
    position: "absolute",
  },
  property1deletePopover: {
    marginTop: -294,
    marginLeft: -147.5,
    top: "50%",
    left: "50%",
    width: 295,
    height: 300,
    position: "absolute",
  },
  deletePopover: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 335,
    height: 628,
    overflow: "hidden",
  },
});

export default DeletePopOver;
