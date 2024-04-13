import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import NotificationFormContainer from "./NotificationFormContainer";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const NotificationsButton = () => {
  return (
    <View style={styles.notificationsButton}>
      <View style={styles.property1default}>
        <View style={styles.notificatiosRectangle} />
        <Text style={[styles.notifications, styles.onClr]}>Notifications</Text>
        <Text style={[styles.on, styles.onClr]}>On</Text>
        <Image
          style={styles.iconMaterialNotificationsAc}
          resizeMode="cover"
          source={require("../assets/icon-materialnotificationsactive.png")}
        />
      </View>
      <NotificationFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  onClr: {
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
  on: {
    top: "38.46%",
    left: "89.21%",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.quicksandMedium,
    textAlign: "right",
  },
  iconMaterialNotificationsAc: {
    height: "30.15%",
    width: "6.62%",
    top: "35.38%",
    right: "86.09%",
    bottom: "34.46%",
    left: "7.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  property1default: {
    marginLeft: -151,
    top: 20,
    left: "50%",
    width: 302,
    height: 65,
    position: "absolute",
  },
  notificationsButton: {
    borderRadius: Border.br_8xs,
    borderStyle: "dashed",
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    width: 342,
    height: 212,
    overflow: "hidden",
  },
});

export default NotificationsButton;
