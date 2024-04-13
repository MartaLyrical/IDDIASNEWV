import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import Connected from "./Connected";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Connected = ({
  iDID,
  property1ConnectedPosition,
  property1ConnectedTop,
  property1ConnectedLeft,
  rectangleViewBackgroundColor,
  iDIDLeft,
}) => {
  const property1ConnectedStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1ConnectedPosition),
      ...getStyleValue("top", property1ConnectedTop),
      ...getStyleValue("left", property1ConnectedLeft),
    };
  }, [
    property1ConnectedPosition,
    property1ConnectedTop,
    property1ConnectedLeft,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [rectangleViewBackgroundColor]);

  const iDIDStyle = useMemo(() => {
    return {
      ...getStyleValue("left", iDIDLeft),
    };
  }, [iDIDLeft]);

  return (
    <View style={[styles.property1connected, property1ConnectedStyle]}>
      <Connected
        connectedPosition="absolute"
        connectedWidth="100%"
        connectedHeight="100%"
        connectedTop="0%"
        connectedRight="0%"
        connectedBottom="0%"
        connectedLeft="0%"
        iDIDFontFamily="Quicksand-Medium"
        iDIDFontWeight="500"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  property1connected: {
    width: 60,
    height: 30,
  },
});

export default Property1Connected;
