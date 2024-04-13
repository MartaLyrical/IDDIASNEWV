import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NotificationFormContainer = () => {
  return (
    <View style={styles.property1default}>
      <View style={styles.notificatiosRectangle} />
      <Text style={[styles.notifications, styles.offClr]}>Notifications</Text>
      <Text style={[styles.off, styles.offClr]}>Off</Text>
      <Image
        style={styles.iconMaterialNotificationsIn}
        resizeMode="cover"
        source={require("../assets/icon-materialnotificationsinactive.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  offClr: {
    color: Color.colorWhite,
    position: "absolute",
  },
  notificatiosRectangle: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightseagreen_200,
    position: "absolute",
  },
  notifications: {
    top: "36.92%",
    left: "17.22%",
    fontSize: FontSize.size_mini,
    fontWeight: "700",
    fontFamily: FontFamily.quicksandBold,
    textAlign: "left",
  },
  off: {
    top: "38.46%",
    left: "88.54%",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "right",
  },
  iconMaterialNotificationsIn: {
    height: "30.15%",
    width: "5.3%",
    top: "35.38%",
    right: "86.75%",
    bottom: "34.46%",
    left: "7.95%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1default: {
    marginLeft: -151,
    top: 127,
    left: "50%",
    width: 302,
    height: 65,
    position: "absolute",
  },
});

export default NotificationFormContainer;
