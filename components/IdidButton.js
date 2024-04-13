import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IdidButton = () => {
  return (
    <View style={styles.ididButton}>
      <View style={[styles.property1connected, styles.property1connectLayout]}>
        <View style={styles.connected}>
          <View style={[styles.connectedChild, styles.childPosition]} />
          <Text style={[styles.idid, styles.idTypo]}>IDID</Text>
        </View>
      </View>
      <View style={[styles.property1connect, styles.property1connectLayout]}>
        <View style={styles.connected}>
          <View style={[styles.connectChild, styles.childPosition]} />
          <Text style={[styles.id, styles.idTypo]}>ID</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  property1connectLayout: {
    height: 30,
    width: 60,
    left: 20,
    position: "absolute",
  },
  childPosition: {
    borderRadius: Border.br_3xs,
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  idTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_sm,
    top: 2,
    position: "absolute",
  },
  connectedChild: {
    backgroundColor: Color.colorBlue,
  },
  idid: {
    left: 16,
  },
  connected: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  property1connected: {
    top: 20,
  },
  connectChild: {
    backgroundColor: Color.colorDodgerblue,
  },
  id: {
    left: 23,
  },
  property1connect: {
    top: 71,
  },
  ididButton: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 100,
    height: 121,
    overflow: "hidden",
  },
});

export default IdidButton;
