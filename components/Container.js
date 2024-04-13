import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const Container = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.property1popOver}>
      <View style={[styles.property1popOverChild, styles.childPosition]} />
      <Text
        style={[styles.yourAccountHas, styles.close1Typo]}
      >{`Your account has been
successfully deleted`}</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Splash")}
      >
        <View style={styles.close}>
          <View style={[styles.closeChild, styles.childPosition]} />
          <Text style={[styles.close1, styles.close1Typo]}>Close</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  childPosition: {
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
  close1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  property1popOverChild: {
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.5)",
  },
  yourAccountHas: {
    top: "16.67%",
    left: "13.02%",
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
  },
  closeChild: {
    backgroundColor: Color.colorRed,
    shadowColor: "rgba(38, 153, 251, 0.1)",
  },
  close1: {
    top: "25%",
    left: "39.75%",
    fontSize: FontSize.size_base,
    color: Color.colorWhite,
  },
  close: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  button: {
    height: "22.22%",
    width: "67.8%",
    top: "61.11%",
    right: "15.93%",
    bottom: "16.67%",
    left: "16.27%",
    position: "absolute",
  },
  property1popOver: {
    marginTop: 114,
    marginLeft: -147.5,
    top: "50%",
    left: "50%",
    width: 295,
    height: 180,
    position: "absolute",
  },
});

export default Container;
