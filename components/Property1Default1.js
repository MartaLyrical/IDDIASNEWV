import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Default1 = ({
  property1DefaultPosition,
  property1DefaultMarginLeft,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultHeight,
  notificationsTop,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
      ...getStyleValue("marginLeft", property1DefaultMarginLeft),
      ...getStyleValue("top", property1DefaultTop),
      ...getStyleValue("left", property1DefaultLeft),
      ...getStyleValue("height", property1DefaultHeight),
    };
  }, [
    property1DefaultPosition,
    property1DefaultMarginLeft,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultHeight,
  ]);

  const notificationsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", notificationsTop),
    };
  }, [notificationsTop]);

  return (
    <View style={[styles.property1default, property1DefaultStyle]}>
      <View style={styles.notificatiosRectangle} />
      <Text style={[styles.notifications, styles.onClr, notificationsStyle]}>
        Notifications
      </Text>
      <Text style={[styles.on, styles.onClr]}>On</Text>
      <Image
        style={styles.iconMaterialNotificationsAc}
        resizeMode="cover"
        source={require("../assets/icon-materialnotificationsactive.png")}
      />
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
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  property1default: {
    width: 302,
    height: 65,
  },
});

export default Property1Default1;
